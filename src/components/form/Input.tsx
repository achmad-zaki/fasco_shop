type FormInputProps = {
  type: 'text' | 'email' | 'password'
  name: string;
  label: string;
}

export default function FormInputComponent(props: FormInputProps) {
  const { type, name, label } = props

  return (
    <div className="relative z-0 w-full mb-5 group">
      <input type={type} name={name} id={name} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-custom-gray appearance-none focus:outline-none focus:ring-0 focus:border-custom-gray peer" placeholder=" " />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-custom-gray duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-custom-gray peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{label}</label>

      {/* Error Message */}
      <p id="standard_error_help" className="mt-2 text-xs text-red-600 dark:text-red-400"><span className="font-medium">Oh, snapp!</span> Some error message.</p>
    </div>
  )
}
