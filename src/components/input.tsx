import '../styles/components/input.sass'

interface InputProps {
  label: string
  placeholder?: string
  name: string
  register: any
  isErrored?: boolean
}

export const Input = ({placeholder, label, name, register, isErrored}: InputProps) => {
  return (
    <label id='label'>
      {label}
      <input {...register(name)} className="input" placeholder={placeholder && placeholder}/>
    </label>
  )
}