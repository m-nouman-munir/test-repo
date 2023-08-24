import * as bcrypt from 'bcrypt';

export async function generateHash(of: string): Promise<string> {
  const saltOrRounds: number = 10;
  const hash: string = await bcrypt.hash(of, saltOrRounds);
  return hash;
}
