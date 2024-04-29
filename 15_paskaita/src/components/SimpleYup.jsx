import { object, string, number, date } from "yup";

let userSchema = object({
  name: string().required(),
  age: number().required().positive().integer(),
  email: string().email(),
  website: string().url().nullable(),
  createdOn: date().default(() => new Date()),
});

const SimpleYup = () => {
  const validateUser = async (user) => {
    // name is required

    try {
      await userSchema.validate(user);
      console.log("Successfull validation");
    } catch (error) {
      console.error(error);
    }
  };

  const goodUser = {
    name: "Rokas",
    age: 25,
    email: "rokas@gmail.com",
    website: "https://www.npmjs.com/package/yup",
    createdOn: new Date(),
  };

  const badUser = {
    name: "Rokas",
    age: 25,
    email: "rokas@gmail.com",
    website: "https://www.npmjs.com/package/yup",
    createdOn: "2024-04-29T15:49:59Z",
  };

  return (
    <div>
      <button onClick={() => validateUser(goodUser)}>Validate good user</button>
      <button onClick={() => validateUser(badUser)}>Validate bad user</button>
    </div>
  );
};

export default SimpleYup;
