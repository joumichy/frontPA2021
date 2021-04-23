import User from "./User";

export default interface UserResponse {
  user: User
  token: string
}