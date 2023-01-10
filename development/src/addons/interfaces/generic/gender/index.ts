export interface GenericGenderInfo_I { 
  id: number,
  name: string,
}

export function GenericGenderInfo_S(data: any): GenericGenderInfo_I {
  // console.log({data});
  
  const genericGenderInfo_S: GenericGenderInfo_I = {
    id: Number(data['id']),
    name: data['name'],
  };

  return genericGenderInfo_S;
}