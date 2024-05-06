import { createAsyncThunk } from "@reduxjs/toolkit";
import { BiomDto } from "../../models/dto/biom.dto.ts";
import jsonData from "../../assets/biom.json";

export const getBiom = createAsyncThunk<
  BiomDto[],
  undefined,
  { rejectValue: string }
>("bacteria/getBiom", (_, { rejectWithValue }) => {
  const biom: BiomDto[] = [];

  jsonData.rows.map(async (_, index: number) => {
    biom.push(await getRow(index));
  });

  if (biom.length === 0) {
    rejectWithValue("Parse error");
  }

  return biom;
});

async function getRow(index: number): Promise<BiomDto> {
  return {
    name: await getName(index),
    taxId: await getTaxId(index),
    abundanceScore: await getAbundanceScore(index),
    relativeAbundance: await getRelativeAbundance(index),
    uniqueMatchesFrequency: await getUniqueMatchesFrequency(index),
  };
}

async function getName(index: number): Promise<string> {
  return jsonData.rows[index].metadata.lineage[7].name;
}

async function getTaxId(index: number): Promise<number> {
  return jsonData.rows[index].metadata.tax_id;
}

async function getAbundanceScore(index: number): Promise<number> {
  return jsonData.data[index * 3 + 1][2];
}

async function getRelativeAbundance(index: number): Promise<string> {
  const relativeAbundance = jsonData.data[index * 3][2] * 100;
  if (relativeAbundance < 0.01) {
    return "<0.01%";
  }
  return relativeAbundance.toFixed(2) + "%";
}

async function getUniqueMatchesFrequency(index: number): Promise<number> {
  return jsonData.data[index * 3 + 2][2];
}
