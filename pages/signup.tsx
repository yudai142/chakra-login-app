import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth, useUser } from "../hooks/firebase";

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
  const auth = useAuth();
  const currentUser = useUser();
  const router = useRouter();
  const signup = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("ユーザー登録成功")
    } catch (e) {
      console.error(e);
    }
  };
  const onSubmit: SubmitHandler<Inputs> = ({
    email,
    password,
    confirmationPassword,
  }) => {
    if (password === confirmationPassword) {
      signup(email, password);
    } else {
      alert("パスワードが一致しません");
    }
  };
  useEffect(() => {
    if (currentUser) router.push("/");
  }, [currentUser, router]);
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
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