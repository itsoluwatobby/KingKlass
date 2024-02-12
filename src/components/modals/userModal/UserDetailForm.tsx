import UserInputDetails from "./UserInputDetails"


type UserDetailFormProps = {
  userDetails: UserDetails;
  disabled: boolean;
  setUserDetails: React.Dispatch<React.SetStateAction<UserDetails>>
}

export default function UserDetailForm({ setUserDetails, disabled, userDetails }: UserDetailFormProps) {
  const { email, name, mobileNumber, password, username } = userDetails;

  return (
    <>
       <UserInputDetails
          type="text"
          title="Full Name" value={name as string} name='name' disabled={disabled} id='fullName'
          setUserDetails={setUserDetails}
        />
        <UserInputDetails
          title=" Mobile Number" value={mobileNumber} name='mobileNumber' type='tel' disabled={disabled}
          setUserDetails={setUserDetails} id='mobileNumber'
        />
        <UserInputDetails
          title="Username" value={username} type='text' name='username' disabled={disabled}
          setUserDetails={setUserDetails} id='userUsername'
        />
        <UserInputDetails
          placeholder="iamuser@jj.com" id='userEmail'
          title="Email" value={email} name='email' disabled={disabled}
          setUserDetails={setUserDetails} type='email'
        />
        <UserInputDetails
          title="Password" value={password} name='password' disabled={disabled} id="userPassword"
          setUserDetails={setUserDetails} type='password'
        />
    </>
  )
}