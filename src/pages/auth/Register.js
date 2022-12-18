import React from "react";

const Login = () => {
    return (
        <div className="flex h-screen">
            <div className="basis-1/2 bg-[url('../images/auth/bg-auth.png')] bg-cover">
                <div className="bg-[#5E50A1]/80 h-screen relative">
                    <div className="absolute">
                        <img className="h-[690px]" src={require('../assets/images/auth/ornamen-left.png')} alt="" />
                    </div>
                    <div className="absolute right-0">
                        <img src={require('../assets/images/auth/ornamen-right.png')} alt="" />
                    </div>
                    <img className="ml-10 pt-10" src={require('../assets/images/auth/logo-small-white.png')} alt="logo" />
                    <h1 className="text-white text-4xl font-bold ml-14 mt-40 w-[340px] leading-normal">Temukan developer berbakat & terbaik di berbagai bidang keahlian</h1>
                </div>
            </div>
            <div className="basis-1/2 bg-[#E5E5E] overflow-y-auto">
                <div className="py-28 px-16">
                    <h2 className="text-2xl font-bold mb-3">Halo, Pewpeople</h2>
                    <p className="text-gray-500 mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                    <form>
                        <div className="flex flex-col mb-7">
                            <label className="text-gray-400 mb-1">Nama</label>
                            <input className="border rounded py-2 px-4 bg-white" type="text" name="name" placeholder="Masukan nama panjang"/>
                        </div>
                        <div className="flex flex-col mb-7">
                            <label className="text-gray-400 mb-1">Email</label>
                            <input className="border rounded py-2 px-4 bg-white" type="email" name="email" placeholder="Masukan alamat email"/>
                        </div>
                        <div className="flex flex-col mb-7">
                            <label className="text-gray-400 mb-1">No handphone</label>
                            <input className="border rounded py-2 px-4 bg-white" type="telp" name="nohp" placeholder="Masukan no handphone"/>
                        </div>
                        <div className="flex flex-col mb-7">
                            <label className="text-gray-400 mb-1">Kata sandi</label>
                            <input className="border rounded py-2 px-4 bg-white" type="password" name="password" placeholder="Masukan kata sandi"/>
                        </div>
                        <div className="flex flex-col mb-7">
                            <label className="text-gray-400 mb-1">Konfirmasi kata sandi</label>
                            <input className="border rounded py-2 px-4 bg-white" type="password" name="cpassword" placeholder="Masukan konfirmasi kata sandi"/>
                        </div>
                        <button className="bg-[#FBB017] rounded text-white w-full py-2 my-5">Daftar</button>
                    </form>
                    <p className="text-center">Anda sudah punya akun? <span className="text-[#FBB017]">Masuk disini</span></p>
                </div>
            </div>
        </div>
    )
}

export default Login