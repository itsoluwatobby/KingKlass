import UserInputDetails from "./UserInputDetails"


type UserDetailFormProps = {
  userDetails: User;
  disabled: boolean;
  setUserDetails: React.Dispatch<React.SetStateAction<User>>
}

export default function UserDetailForm({ setUserDetails, disabled, userDetails }: UserDetailFormProps) {
  const { email, first_name, last_name, phone_no } = userDetails;

  return (
    <>
       <UserInputDetails
          type="text"
          title="First Name" value={first_name as string} name='first_name' disabled={disabled} id='fullName'
          setUserDetails={setUserDetails}
        />
        <UserInputDetails
          title="Last Name" value={last_name as string} type='text' name='last_name' disabled={disabled}
          setUserDetails={setUserDetails} id='userUsername'
        />
        <UserInputDetails
          title=" Mobile Number" value={phone_no as string} name='phone_no' type='tel' disabled={disabled}
          setUserDetails={setUserDetails} id='mobileNumber'
        />
        <UserInputDetails
          placeholder="iamuser@jj.com" id='userEmail'
          title="Email" value={email as string} name='email' disabled={true}
          setUserDetails={setUserDetails} type='email'
        />
        {/* <UserInputDetails
          title="Password" value={password} name='password' disabled={disabled} id="userPassword"
          setUserDetails={setUserDetails} type='password'
        /> */}
    </>
  )
}