import { Link } from "react-router-dom";
import { Button, Label } from "../../components";

const Register = () => {
  return (
    <div className="flex items-center justify-center max-w-[500px] sm:mt-28 mt-14">
      <div className="bg-white w-full rounded-lg overflow-hidden shadow-2xl">
        <div className="p-8">
          <form>
            <div className="flex gap-2">
              <Label
                label={{ htmlFor: "Fname", text: "First Name" }}
                input={{ id: "Fname", type: "text", name: "Fname", value: "" }}
              />
              <Label
                label={{ htmlFor: "Lname", text: "Last Name" }}
                input={{ id: "Lname", type: "text", name: "Lname", value: "" }}
              />
            </div>
            <Label
              label={{ htmlFor: "email", text: "Email" }}
              input={{ id: "email", type: "email", name: "email", value: "" }}
            />
            <Label
              label={{ htmlFor: "password", text: "Password" }}
              input={{
                id: "password",
                type: "password",
                name: "password",
                value: "",
              }}
            />
            <Button
              className="bg-[#ad1f29ee] text-white"
              text="Create Account"
            />
          </form>
        </div>

        <div className="flex justify-end p-8 text-sm border-t border-gray-300 bg-gray-100">
          <Link to="/login" className="font-medium text-[#ad1f29ee]">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
