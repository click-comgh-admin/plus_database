export interface ClientUsers_I {
  id?: number,
  firstname?: string,
  surname?: string,
  gender?: number,
  profilePicture?: string,
  dateOfBirth?: Date,
  phone?: string,
  email?: string,
  role?: number,
  accountId?: number,
  branchId?: number,
  level?: number,
  status?: number,
  lastUpdatedBy?: number,
  date?: Date,
  last_login?: Date,
}
export interface ClientUserShort_I {
  id?: number,
  accountId?: number,
  branchId?: number,
  firstname?: string,
  surname?: string,
  phone?: string,
  email?: string,
  profilePicture?: string,
}

export function ClientUsers_S(data: any): ClientUsers_I {
  // console.log({data});
  
  const clientUsers_S: ClientUsers_I = {
    id: Number(data['id']),
    firstname: String(data['firstname']),
    surname: String(data['surname']),
    gender: Number(data['gender']),
    profilePicture: String(data['profilePicture']),
    dateOfBirth: new Date(data['dateOfBirth']),
    phone: String(data['phone']),
    email: String(data['email']),
    role: Number(data['role']),
    accountId: Number(data['accountId']),
    branchId: Number(data['branchId']),
    level: Number(data['level']),
    status: Number(data['status']),
    lastUpdatedBy: Number(data['lastUpdatedBy']),
    date: new Date(data['date']),
    last_login: new Date(data['last_login']),
  };

  return clientUsers_S;
}