import { v4 as uuidv4 } from "uuid";

class User {
  id?: string;
  name: string;
  email: string;
  password: string;
  created_at?: Date;
  updated_at?: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }

    if (!this.created_at) {
      this.created_at = new Date();
    } else {
      this.updated_at = new Date();
    }
  }
}

export default User;
