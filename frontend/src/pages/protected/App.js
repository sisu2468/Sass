import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { setPageTitle } from '../../features/common/headerSlice'
import { Table, Input, ColorPicker, Collapse, Space, Select, Typography, Button, Flex} from 'antd'
import { ClearOutlined, OpenAIOutlined, ToTopOutlined } from '@ant-design/icons';
import moment from 'moment'
import TitleCard from '../../components/Cards/TitleCard'
import query from '../../utils/query'
import TrashIcon from '@heroicons/react/24/outline/TrashIcon'
import EyeIcon from '@heroicons/react/24/outline/EyeIcon'

const { Column } = Table;
<script src="https://cdn.tailwindcss.com"></script>

function Result() {
    const { t } = useTranslation()
    const { TextArea } = Input;
    const { Option } = Select;
    const { Title } = Typography;

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: "result" }))
    }, [])

    const [PKS, set_PKS] = useState([]);
    const [AES, set_AES] = useState([]);

    useEffect(() => {
        query.get('/PKS', (res) => {
            set_PKS(res.result);
        });
        query.get('/AES', (res) => {
            set_AES(res.result);
        }, [])
    }, [])

    const [tableData1, setTableData1] = useState([]);
    const [tableData2, setTableData2] = useState([]);

    const [search1, setSearch1] = useState('');
    const [search2, setSearch2] = useState('');

    useEffect(() => {
        setTableData1(PKS.filter(row => (row.name.indexOf(search1) >= 0 || moment(row.createdAt).format('YYYY-MM-DD HH:mm').indexOf(search1) >= 0)).map(row => {
            return {
                ...row, key: row._id, action:
                    <div className='flex gap-2'>
                        <EyeIcon className='w-4 h-4 cursor-pointer' onClick={() => { window.location.href = `/app/PKS?_id=${row._id}` }} />
                        <TrashIcon className='w-4 h-4 text-red-500 cursor-pointer' onClick={() => {
                            query.delete('/PKS/' + row._id)
                            set_PKS(PKS.filter(({ _id }) => _id != row._id));
                        }} />
                    </div>,
                datetime: moment(row.createdAt).format('YYYY-MM-DD HH:mm')
            }
        }))
    }, [PKS, search1])

    useEffect(() => {
        setTableData2(AES.filter(row => (row.name.indexOf(search2) >= 0 || moment(row.createdAt).format('YYYY-MM-DD HH:mm').indexOf(search2) >= 0)).map(row => {
            return {
                ...row, key: row._id, action:
                    <div className='flex gap-2'>
                        <EyeIcon className='w-4 h-4 cursor-pointer' onClick={() => { window.location.href = `/app/AES?_id=${row._id}` }} />
                        <TrashIcon className='w-4 h-4 text-red-500 cursor-pointer' onClick={() => {
                            query.delete('/AES/' + row._id);
                            set_AES(AES.filter(({ _id }) => _id != row._id));
                        }} />
                    </div>,
                datetime: moment(row.createdAt).format('YYYY-MM-DD HH:mm')
            }
        }));
    }, [AES, search2])

    const[bkcolor, setBkColor] = useState('#2a323c')
    const[textcolor, setTextColor] = useState('#3F6AA6')
    const[buttoncolor, setButtonColor] = useState('#024DB6')

    const[title, setTitle] = useState('My APP')
    const[description, setDescription] = useState('My APP')

    const[formlabel, setFormLabel] = useState('My Form')
    const[formfield, setFormField] = useState('')

    const [position, setPosition] = useState('end');

    function hsvToHex(h, s, v) {
        let r, g, b;
      
        const i = Math.floor(h * 6);
        const f = h * 6 - i;
        const p = v * (1 - s);
        const q = v * (1 - f * s);
        const t = v * (1 - (1 - f) * s);
      
        switch (i % 6) {
          case 0: r = v; g = t; b = p; break;
          case 1: r = q; g = v; b = p; break;
          case 2: r = p; g = v; b = t; break;
          case 3: r = p; g = q; b = v; break;
          case 4: r = t; g = p; b = v; break;
          case 5: r = v; g = p; b = q; break;
          default: r = 0; g = 0; b = 0;
        }
      
        const toHex = x => {
          const hex = Math.round(x * 255).toString(16);
          return hex.length === 1 ? '0' + hex : hex;
        };
      
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    }

    // Handle color change event
    const bkColorChange = (color) => {
        const { h, s, v } = color.metaColor.originalInput; // Extract HSV values
        const hexColor = hsvToHex(h, s, v); // Convert HSV to hex
        setBkColor(hexColor); // Update the state with the hex value
        console.log(hexColor); // Log the hex value for debugging purposes
    };
    const textColorChange = (color) => {
        const { h, s, v } = color.metaColor.originalInput; // Extract HSV values
        const hexColor = hsvToHex(h, s, v); // Convert HSV to hex
        setTextColor(hexColor); // Update the bkcolor state with the selected color's hex value
    };
    const buttonColorChange = (color) => {
        const { h, s, v } = color.metaColor.originalInput; // Extract HSV values
        const hexColor = hsvToHex(h, s, v); // Convert HSV to hex
        setButtonColor(hexColor); // Update the bkcolor state with the selected color's hex value
    };
    const titleChange = (e) => {
        setTitle(e.target.value); // Update the bkcolor state with the selected color's hex value
    };
    const descriptionChange = (e) => {
        setDescription(e.target.value); // Update the bkcolor state with the selected color's hex value
    };
    const formlabelChange = (e) => {
        setFormLabel(e.target.value); // Update the bkcolor state with the selected color's hex value
    };
    const formfieldChange = (e) => {
        setFormField(e.target.value); // Update the bkcolor state with the selected color's hex value
    };
    const[myform, setMyform] = useState('')
    const SetForm = (e) => {
        setMyform(e.target.value)
    }
    const setClear = (e) => {
        setMyform('')
    }

    const[openaikey, setOpenAIKey] = useState('')
    const OpenAIKey = (e) => {
        setOpenAIKey(e.target.value)
    }

    return (
        <div className='flex gap-4 flex-wrap lg:flex-nowrap'>
            <TitleCard className="flex-grow" title={"Edit"}>
                    {/* <OpenAIOutlined /> */}
                <Space direction="vertical" className='w-full'>
                    <Collapse
                        collapsible="header"
                        defaultActiveKey={['1']}
                        icon={OpenAIOutlined}
                        // className='w-full'
                        expandIconPosition={'end'}
                        items={[
                            {
                                key: '1',
                                icon: {OpenAIOutlined},
                                label: 'App Basics',
                                children: 
                                <>
                                    <div className='flex'>
                                        <label className='w-24 p-1'>Background:  </label>
                                        <ColorPicker className='border-none	bg-inherit' defaultValue={bkcolor} onChange={bkColorChange} value={bkcolor}/>
                                    </div>
                                    <div className='flex'>
                                        <label className='w-24 p-1'>Text:  </label>
                                        <ColorPicker className='border-none	bg-inherit' defaultValue={textcolor} onChange={textColorChange} value={textcolor} />
                                    </div>
                                    <div className='flex'>
                                        <label className='w-24 p-1'>Button:  </label>
                                        <ColorPicker className='border-none	bg-inherit' defaultValue={buttoncolor} onChange={buttonColorChange} value={buttoncolor} />
                                    </div>
                                    <div className='flex mb-1.5'>
                                        <label className='w-24 p-1'>App Title:  </label>
                                        <Input rows={4} placeholder="maxLength is 10" maxLength={10} onChange={titleChange} value={title} />
                                    </div>
                                    <div className='flex'>
                                        <label className='w-24 p-1'>Description:  </label>
                                        <TextArea rows={4} placeholder="maxLength is 20" maxLength={20} onChange={descriptionChange} value={description} />
                                    </div>
                                </>,
                            },
                        ]}
                    />
                    <Collapse
                        collapsible="header"
                        icon={OpenAIOutlined}
                        // className='w-full'
                        expandIconPosition={'end'}
                        items={[
                            {
                                key: '2',
                                icon: {OpenAIOutlined},
                                label: 'Form',
                                children: 
                                <>
                                    <div className='flex mb-1.5'>
                                        <label className='w-24 p-1'>Field Label:  </label>
                                        <Input rows={4} placeholder="" maxLength={10} onChange={formlabelChange} value={formlabel}/>
                                    </div>
                                    <div className='flex'>
                                        <label className='w-24 p-1'>Description:  </label>
                                        <Input rows={4} placeholder="Placeholder Text" maxLength={100} onChange={formfieldChange} value={formfield} />
                                    </div>
                                </>,
                            },
                        ]}
                    />
                    <Collapse
                        collapsible="header"
                        icon={OpenAIOutlined}
                        // className='w-full'
                        expandIconPosition={'end'}
                        items={[
                            {
                                key: '3',
                                icon: {OpenAIOutlined},
                                label: 'OpenAI',
                                children: 
                                <>
                                    <div className='flex'>
                                        <label className='w-24 p-1'>OpenAI Key:  </label>
                                        <Input rows={4} placeholder="Please Input OpenAI Key" maxLength={1000} onChange={OpenAIKey} value={openaikey} />
                                    </div>
                                </>,
                            },
                        ]}
                    />
                </Space>
            </TitleCard>
            <TitleCard className="flex-grow" title={"Preview & Test Window"}>
                <div className='px-20 h-full' style={{ backgroundColor: bkcolor, color: textcolor }}>
                    <h1 style={{ color: textcolor}} className='text-center mb-5 pt-8 text-4xl font-bold	'>{title}</h1>
                    <h2 style={{color: textcolor}} className='text-2xl mb-5'>{description}</h2>
                    <h3 style={{color: textcolor}} className='text-xl mb-5'>{formlabel}</h3>
                    <textarea className='mb-4 w-full rounded-lg	' rows={4} placeholder={formfield} maxLength={1000} onChange={SetForm} value={myform}/>
                    <div wrap className='flex item-center justify-center'>
                        <button className='mr-10	rounded-md	w-20 font-bold text-white	' defaultBg={buttoncolor} style={{backgroundColor: buttoncolor}} iconPosition={position} onClick={setClear} >Clear<i data-lucide="paintbrush"></i></button>
                        <button className='rounded-md h-10	w-20 font-bold text-white	'	defaultBg={buttoncolor} style={{backgroundColor: buttoncolor}} iconPosition='end' >Submit</button>
                    </div>
                </div>
            </TitleCard>
        </div >
    )
}

export default Result