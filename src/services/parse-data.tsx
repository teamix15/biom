import { BiomDto } from "../models/dto/biom.dto";
import jsonData from "../assets/biom.json";

export async function getRow(index: number): Promise<BiomDto> {
  return {
    name: await getName(index),
    taxId: await getTaxId(index),
    abundanceScore: await getAbundanceScore(index),
    relativeAbundance: await getRelativeAbundance(index),
    uniqeMatchesFrequency: await getUniqeMatchesFrequency(index),
  };
}

async function getName(index: number): Promise<string> {
  return jsonData.rows[index].metadata.title;
}

async function getTaxId(index: number) {
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

async function getUniqeMatchesFrequency(index: number): Promise<number> {
  return jsonData.data[index * 3 + 2][2];
}
