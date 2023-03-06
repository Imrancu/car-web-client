import React from 'react';
import logo from '../../../assets/logo.svg';
import { GrFacebookOption, GrTwitter } from 'react-icons/gr';
import { AiOutlineGithub } from 'react-icons/ai';
import { ImLinkedin2 } from 'react-icons/im';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-32 bg-gray-900  text-gray-400">
            <div>
                <img className="w-20" src={logo} alt="Logo" />
                <p>Edwin Diaz is a software <br /> and web technologies engineer, <br /> a life coach trainer who is also a serial .</p>
                <div className='grid grid-cols-4 gap-3 text-black text-xl content-center'>
                    <Link className='p-2 hover:text-orange-600 bg-slate-200 rounded-full' to="/"><AiOutlineGithub /></Link>
                    <Link className='p-2 hover:text-orange-600 bg-slate-200 rounded-full' to="/"><GrFacebookOption /></Link>
                    <Link className='p-2 hover:text-orange-600 bg-slate-200 rounded-full' to="/"><ImLinkedin2 /></Link>
                    <Link className='p-2 hover:text-orange-600 bg-slate-200 rounded-full' to="/"><GrTwitter /></Link>
                </div>
            </div>
            <div>
                <span className="text-lg font-bold text-white">Services</span>
                <a href="/" className="link link-hover">Branding</a>
                <a href="/" className="link link-hover">Design</a>
                <a href="/" className="link link-hover">Marketing</a>
                <a href="/" className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="text-lg font-bold text-white">Company</span>
                <a href="/" className="link link-hover">About us</a>
                <a href="/" className="link link-hover">Contact</a>
                <a href="/" className="link link-hover">Jobs</a>
                <a href="/" className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="text-lg font-bold text-white">Legal</span>
                <a href="/" className="link link-hover">Terms of use</a>
                <a href="/" className="link link-hover">Privacy policy</a>
                <a href="/" className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;