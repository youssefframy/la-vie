

const ForgotPassword = () => {
    return (
      <div className="flex w-[100%] justify-between pb-5">
        <div className="flex justify-center align-center">
          <input type="checkbox" className="w-5 h-5" />
          <h1 className="ml-2 text-darkgray font-semibold text-l leading-[20px]">
            Remember me
          </h1>
        </div>
        <h1 className="font-Poppins font-bold text-green border-b">
          Forget password ?
        </h1>
      </div>
    );
}

export default ForgotPassword;