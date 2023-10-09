// import Link from 'next/link'
// import Image from 'next/image'

const Custom404 = () => {
    
    return (
        <div className="flex flex-col space-y-4 justify-center items-center h-screen">
            <h1 className="text-4xl font-aleo font-bold">Uh Oh!</h1>
            <h2 className="text-xl sm:text-4xl text-center font-brandon">"La page que vous recherchez n'existe pas"</h2>
            <p
                type="button"
                className="text-lg text-center font-brandon font-light text-gray-400 px-6"
            >
                "Vous avez peut-être tapé une mauvaise adresse ou la page a été déplacée. En attendant, réessayez ou "
                {/* <Link href="/">
                    <a className="text-green-500 hover:underline">
                        "retournez à la page d'accueil"
                    </a>
                </Link> */}
                .
            </p>
            {/* <div className="relative h-52 w-80 sm:h-96 sm:w-96">
                <Image
                    src={'/images/404.svg'}
                    layout="fill"
                    objectFit="contain"
                    alt="image 404"
                />
            </div> */}
        </div>
    )
}

export default Custom404
