import { Link } from "react-router-dom";
import { Button, Label } from "../../components";

const Login = () => {
  return (
    <div className="flex items-center justify-center max-w-[500px] sm:mt-28 mt-14">
      <div className="bg-white w-full rounded-lg overflow-hidden shadow-2xl">
        <div className="p-8">
          <form>
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
            <Button className="bg-[#ad1f29ee] text-white" text="Login" />
          </form>
        </div>

        <div className="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
          <Link to='/register' className="font-medium text-[#ad1f29ee]">
            Create account
          </Link>

          <Link to="#" className="text-gray-600">
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
