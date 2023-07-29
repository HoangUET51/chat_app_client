class User {
  _id: string;
  email: string;
  fullName: string;
  avatar: string;
  address: string;
  gender: string;
  phone: string;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(data: any) {
    this._id = data._id;
    this.email = data.email;
    this.fullName = data.fullName;
    this.avatar = data.avatar;
    this.address = data.address;
    this.gender = data.gender;
    this.phone = data.phone;
    this.createdAt = data?.createdAt;
    this.updatedAt = data?.updatedAt;
  }
}

export default User;
