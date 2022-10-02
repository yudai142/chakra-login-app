export default function Login() {
  return (
    <div>
      <form>
        <div>
          <label>Eメール</label>
          <input type="email" placeholder="example@text.com" />
        </div>
        <div>
          <label>パスワード</label>
          <input type="password"/>
        </div>
        <div>
          <label>パスワード確認</label>
          <input type="password"/>
        </div>
        <button type="submit">サインアップ</button>
      </form>
    </div>
  )
}