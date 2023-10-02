
interface ProfileCardProps{
  name?: string;
  username?: string;
  profileImage?: string;
  description?: string; 
}

const ProfileCard:React.FC<ProfileCardProps> = ({name, username, profileImage, description}) => {
  
  return (
    <div>
      <div className="border border-solid border-gray-700 mx-8 px-2 m-2 p-2 flex flex-col md:grid md:grid-cols-2 rounded-xl">
        <div className="flex justify-center items-center">
          <div className="h-1/3 w-1/3 flex items-center justify-center">
            <img
              src={profileImage || "/placeholder.png"}
              alt={name}
            />
          </div>{" "}
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-bold text-2xl text-gray-700"> {name}</p>
          <p>
            @<span className="underline">{username}</span>
          </p>
          <p className=" font-semibold">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
