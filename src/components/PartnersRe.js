import { useMediaQuery } from 'react-responsive';

const partners = [
    {
        id: 0,
        link: '',
        logo: 'https://firebasestorage.googleapis.com/v0/b/uploadingfiles-12bf5.appspot.com/o/partners%2Fasleep.png?alt=media&token=d2c78d83-e09b-4b3c-b6d8-5a980875589c'
    },
    {
        id: 1,
        link: '',
        logo: 'https://firebasestorage.googleapis.com/v0/b/uploadingfiles-12bf5.appspot.com/o/partners%2Fadler.png?alt=media&token=fc6b6c08-5916-42bd-8a0b-1c83116437ec'
    },
    {
        id: 2,
        link: '',
        logo: 'https://firebasestorage.googleapis.com/v0/b/uploadingfiles-12bf5.appspot.com/o/partners%2Foceansbio.png?alt=media&token=4b89b019-e3a4-4c7b-b411-bf77161eb0fc'
    },
    {
        id: 3,
        link: '',
        logo: 'https://firebasestorage.googleapis.com/v0/b/uploadingfiles-12bf5.appspot.com/o/partners%2FNamu.png?alt=media&token=db256e49-37cf-419b-8296-7db78d38e445'
    },
    {
        id: 4,
        link: '',
        logo: 'https://firebasestorage.googleapis.com/v0/b/uploadingfiles-12bf5.appspot.com/o/partners%2FSjp.png?alt=media&token=0e4b1e76-4f66-4e3f-abe7-5be48d6b9ecf'
    },
    {
        id: 5,
        link: '',
        logo: 'https://firebasestorage.googleapis.com/v0/b/uploadingfiles-12bf5.appspot.com/o/partners%2FAAU.png?alt=media&token=24c30ae7-8278-4bc4-a1c0-34d33fe30771'
    },
    {
        id: 6,
        link: '',
        logo: 'https://firebasestorage.googleapis.com/v0/b/uploadingfiles-12bf5.appspot.com/o/partners%2FAdama.png?alt=media&token=588f6488-71fb-4a31-b3b5-1bad6329aa3c'
    },
    {
        id: 7,
        link: '',
        logo: 'https://firebasestorage.googleapis.com/v0/b/uploadingfiles-12bf5.appspot.com/o/partners%2FCFPA.png?alt=media&token=bba0650b-ce62-47aa-90c6-d212c575ef77'
    },
    {
        id: 8,
        link: '',
        logo: 'https://firebasestorage.googleapis.com/v0/b/uploadingfiles-12bf5.appspot.com/o/partners%2FGreat.png?alt=media&token=ce49ba04-4574-4af8-9fb9-7e4ccd86bb0e'
    },
    {
        id: 9,
        link: '',
        logo: 'https://firebasestorage.googleapis.com/v0/b/uploadingfiles-12bf5.appspot.com/o/partners%2FLittleride.png?alt=media&token=6bcfc593-ef0e-406f-a390-afa59caa8ea4'
    },
    {
        id: 10,
        link: '',
        logo: 'https://firebasestorage.googleapis.com/v0/b/uploadingfiles-12bf5.appspot.com/o/partners%2FOne%20more.png?alt=media&token=7aa5079d-9d8f-4984-ad6f-18f8b69b502e'
    },
    {
        id: 11,
        link: '',
        logo: 'https://firebasestorage.googleapis.com/v0/b/uploadingfiles-12bf5.appspot.com/o/partners%2FWorld.png?alt=media&token=7478d06e-e6ef-4e2d-a80c-e95b1723e955'
    },
    {
        id: 12,
        link: '',
        logo: 'https://firebasestorage.googleapis.com/v0/b/uploadingfiles-12bf5.appspot.com/o/partners%2Fsnapp.png?alt=media&token=d5a34d80-0488-49a7-97fc-f163340cdbd7'
    }
]

const PartnersRe = () => {

    const isSmall = useMediaQuery({ query: '(max-width: 399px)' })
    return (
        <div className='h-screen w-full'>
            <div className="w-full justify-center h-1/4 flex items-end"><div className={`${isSmall ? 'text-xl' : 'text-3xl'} font-MaruBuri_Regular text-center font-semibold p-8 w-11/12`}>강뉴는 다양한 고객/기관과 성장의 가치를 함께합니다.</div></div>
            <div className="flex justify-center w-full h-3/4">
                <div className={`grid grid-cols-4 ${isSmall ? 'gap-2' : 'gap-4'} w-4/5 h-full`}>
                    {
                    partners.map((data)=>
                        <div key={data.id} className={`flex justify-center ${isSmall ? 'w-full h-full' : 'p-1 h-28'}`}>
                            <div className={` ${isSmall ? 'w-full h-full' : 'h-20 w-28'} p-2 flex items-center`}><img src={data.logo} alt="partner-logo" className={` ${isSmall ? 'w-full' : 'w-24'}`}/></div>
                        </div>
                    )   
                    }
                </div>
            </div>
        </div>
    );
}

export default PartnersRe;