import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
  confirmationPassword: string;
};

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  return (
    <div>
      <form>
        <div>
          <label>Eメール</label>
          <input type="email" placeholder="example@text.com" {...register("email", { required: true })}/>
          {errors.email && (
            <p>
              Eメールは必須です
            </p>
          )}
        </div>
        <div>
          <label>パスワード</label>
          <input type="password" {...register("password", { required: true })}/>
          {errors.password && (
            <p>
              パスワードは必須です
            </p>
          )}
        </div>
        <div>
          <label>パスワード確認</label>
          <input type="password" {...register("confirmationPassword", { required: true })}/>
          {errors.confirmationPassword && (
            <p>
              パスワード再入力は必須です
            </p>
          )}
        </div>
        <button type="submit">サインアップ</button>
      </form>
    </div>
  )
}