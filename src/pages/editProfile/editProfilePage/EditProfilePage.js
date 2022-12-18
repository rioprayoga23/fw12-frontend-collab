import React from 'react';
import DataDiriForm from '../editProfileComponents/asside/dataDiri/DataDiriForm';
import Social from '../editProfileComponents/asside/dataDiri/Social';
import Profile from '../editProfileComponents/profile/Profile';
import SkillForm from '../editProfileComponents/asside/skill/SkillForm'
import PengalamanKerja from '../editProfileComponents/asside/pengalamanKerja/PengalamanKerja';
import Portfolio from '../editProfileComponents/asside/portfolio/Portfolio';
import Navbar from '../../../components/Navbar';




export default function EditProfilePage() {
    return (
        <>
            <Navbar />
            <div className='relative'>
                <div className='md:grid md:grid-cols-[400px_minmax(100px,_1fr)_10px] md:gap-5 mt-20 mb-32 lg:grid-cols-[500px_minmax(100px,_1fr)_110px]'>
                    <Profile />
                    <div className='mx-2'>
                        <form action="" className='flex flex-col md:flex md:flex-col bg-white rounded-[8px]' >
                            <DataDiriForm />
                            <Social />
                            <div className='flex flex-col gap-2 px-7 mt-7 md:flex md:flex-col md:gap-2'>
                                <label htmlFor="decryption" className='text-[#9EA0A5] text-xs'>
                                    Deskripsi singkat
                                </label>
                                <textarea
                                    name="decryption"
                                    id="decryption"
                                    className='deskripsi-singkatClassName'
                                    placeholder='Tuliskan deskripsi singkat'>
                                </textarea>
                            </div>
                            <button
                                type='button'
                                className='w-20 self-end h-12 rounded-[4px] bg-[#FBB017] text-[#FFFFFF] font-openSans m-7 hover:scale-[1.05]'>
                                Simpan
                            </button>
                        </form>
                        <SkillForm />
                        <PengalamanKerja />
                        <Portfolio />
                    </div>
                </div>
            </div>
        </>
    )
};



