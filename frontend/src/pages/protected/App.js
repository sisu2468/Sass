import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useSearchParams } from 'react-router-dom'
import query from '../../utils/query'
import { setPageTitle } from '../../features/common/headerSlice'
import { Table, Input, ColorPicker, Dropdown, Radio, Select, Typography, Button, Image, Upload} from 'antd'
import { EyeOutlined, RocketOutlined, DownOutlined, UploadOutlined } from '@ant-design/icons';
import TitleCard from '../../components/Cards/TitleCard'
import { useNavigate } from 'react-router-dom';

const { Column } = Table;

function Result() {
    
    const navigate = useNavigate();
    const [pages, setPages] = useState([]);

    useEffect(() => {
        AllFetchPages();
    }, [])

    const AllFetchPages = () => {
        query.get(
            'apps/all',
            (res) => {
                console.log(res.data);
                setPages(res.data);
            }
        )
    }

    const AppCreate = async() => {
        query.post(
            '/apps/create',
            (res) => {
                
            }
        );
        navigate('/app/Create')
    }

    const AppDelete = (id) => {
        query.delete(
            'apps/delete/' + id,
            (res) => {
                AllFetchPages();
            }
        )
    }    

    return (
        <>
            <div className='mb-10'>
                <div className=''>
                    <button className='border-2 bg-white p-2 rounded-lg flex' onClick={AppCreate}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>New Create App</button>
                </div>
            </div>
            <div className='flex flex-wrap gap-4'>
                {!!pages.length && (
                    pages.map((page, index) => (
                            <div className='bg-white border-4 rounded-3xl w-[350px] h-[350px] p-5'>
                                <div className='top-3 right-3 flex gap-3 mb-5'>
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                        </svg>
                                    </button>
                                    <Link to={`/app/edit/?id=${page._id}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                        </svg>
                                    </Link> 
                                    <button onClick={() => AppDelete(page._id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                        </svg>
                                    </button>
                                </div>
                                <div className='grid gap-[180px]'>
                                    <h1 className='text-center text-5xl	'>{page.apptitle}</h1>
                                    <div className='flex border-t-2 border-black pt-2 text-[20px]'>
                                        <label>Create Date:    </label>
                                        <p className='ml-5'>{page.createdAt.split('T')[0]}</p>
                                    </div>
                                </div>
                            </div>
                    ))
                )}
            </div>
        </>
    )
}

export default Result