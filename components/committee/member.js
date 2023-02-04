import Image from "next/image"

const Member = ({ name, position, photo }) => {
    return (
        <div className="flex flex-col gap-4">
            {/* Photo */}
            <Image
                className="max-w-[150px] w-full aspect-square rounded-full self-center flex-none"
                src="/images/chess-logo.png"
                width={150}
                height={150}
                alt={`Close-up of ${name}`}
            />

            {/* Position, Name */}
            <div className="text-center flex flex-col gap-1 grow">
                {/* Position */}
                <span className="w-full grow font-medium text-xs uppercase">
                    {position}
                </span>

                {/* Name */}
                <span className="w-full font-medium self-end">{name}</span>
            </div>

            {/* Description */}
            {/* <p className="text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris commodo.</p> */}
        </div>
    )
}

export default Member
