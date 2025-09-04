export interface IAdminUsers {
  id: number;
  name: string;
  phone: string;
  email: string;
  activated: number;
  google_id?: string | null; // optional
  roles: string; // cukup string
  created_at: string;
  updated_at: string;
}
