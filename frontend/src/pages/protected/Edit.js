import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { setPageTitle } from '../../features/common/headerSlice'
import { Table, Input, ColorPicker, Dropdown, Radio, Select, Typography, Button, Image, Upload} from 'antd'
import { EyeOutlined, RocketOutlined, DownOutlined, UploadOutlined } from '@ant-design/icons';
import TitleCard from '../../components/Cards/TitleCard'
import Heading from '../protected/Element/Heading';
import Paragraph from '../protected/Element/Paragraph';


const { Column } = Table;

function Result() {
    const { TextArea } = Input;
    const { Option } = Select;
    const { Title } = Typography;
    const [eyestate, setEyeState] = useState(true);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: "result" }))
    }, [])

    const[bkcolor, setBkColor] = useState('#2a323c')
    const[textcolor, setTextColor] = useState('#3F6AA6')
    const[buttoncolor, setButtonColor] = useState('#024DB6')

    const[title, setTitle] = useState('My APP')
    const[description, setDescription] = useState('My APP')

    const[formlabel, setFormLabel] = useState('My Form')
    const[formfield, setFormField] = useState('')

    const [position, setPosition] = useState('end');

    const [elements, setElements] = useState([]);

    const addHeading = () => {
        setElements([...elements, { type: 'heading', content: 'New Heading' }]);
    };

    const addParagraph = () => {
        setElements([...elements, { type: 'paragraph', content: 'New Paragraph' }]);
    };

    const updateContent = (index, newContent) => {
        const updatedElements = elements.map((el, i) => 
        i === index ? { ...el, content: newContent } : el
        );
        setElements(updatedElements);
    };

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
    const EyeChange = () => {
        setEyeState(prevEyeState => !prevEyeState);
    };
    console.log(eyestate)
    const[openaikey, setOpenAIKey] = useState('')
    const OpenAIKey = (e) => {
        setOpenAIKey(e.target.value)
    }
    // Assuming you have a function called 'handleSubmit' that is called when the submit button is clicked
    function handleSubmit() {
        // Get the current URL
        const currentUrl = window.location.href;
    
        // Extract the domain from the current URL
        const domain = new URL(currentUrl).hostname.split('.').slice(-2).join('.');
    
        // Generate a new subdomain
        const subdomain = `subdomain-${Date.now()}.${domain}`;
    
        // Construct the new URL with the subdomain
        const newUrl = `http://${subdomain}${window.location.pathname}${window.location.search}`;
    
        // Redirect the user to the new URL
        window.location.href = newUrl;
    }
    const [loadings, setLoadings] = useState([]);
    const enterLoading = (index) => {
        setLoadings((state) => {
          const newLoadings = [...state];
          newLoadings[index] = true;
          return newLoadings;
        });
        setTimeout(() => {
          setLoadings((state) => {
            const newLoadings = [...state];
            newLoadings[index] = false;
            return newLoadings;
          });
        }, 6000);
      };
      const items = [
        {
            label: 'Submit and continue',
            key: '1',
        },
        {
            label: 'Submit and continue',
            key: '2',
        }
      ];
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState([]);
    const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    };
    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
    const uploadButton = (
    <button
        style={{
        border: 0,
        background: 'none',
        }}
        type="button"
    >
        <UploadOutlined />
        <div
        style={{
            marginTop: 8,
        }}
        >
        Upload
        </div>
    </button>
    );
    const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
    return (
        <div className='flex gap-4 flex-wrap h-full lg:flex-nowrap'>
            <TitleCard
                className="flex-grow"
                title={"AI Tool Boox"}
                EyeIcon={true}
                TopSideButtons={'Publish'}
                isVisible={eyestate}
                onEyeChange={EyeChange}
            >
                <div className='grid grid-cols-4'>
                    <div className='bg-slate-100 col-span-1 border-r px-[24px]'>
                        <h2 className='mt-[40px]'>Title of the form (editable)</h2>
                        <h2 className='mt-[40px]'>Display Text</h2>
                        <div>
                            <button onClick={addHeading}>Add Heading</button>
                            <button onClick={addParagraph}>Add Paragraph</button>
                            <div>
                                {elements.map((el, index) => (
                                el.type === 'heading' ? (
                                    <Heading 
                                    key={index} 
                                    content={el.content} 
                                    onUpdate={(newContent) => updateContent(index, newContent)} 
                                    />
                                ) : (
                                    <Paragraph 
                                    key={index} 
                                    content={el.content} 
                                    onUpdate={(newContent) => updateContent(index, newContent)} 
                                    />
                                )
                                ))}
                            </div>
                            </div>
                    </div>
                    <div className='pt-[40px] col-span-2 px-8'>
                        <p>This is just a test form with all components.</p>
                        <div className='mt-8 flex flex-col'>
                            <label>Label (for short answer)</label>
                            <Input className='mt-2' showCount maxLength={120} style={{width: 400}}/>
                        </div>
                        <div className='mt-8'>
                            <label>Label (for long answer / Active)</label>
                            <TextArea
                                showCount
                                maxLength={1000}
                                className='mt-2'
                                // placeholder="disable resize"
                                style={{
                                    width: 600,
                                    height: 160
                                }}
                            />
                        </div>
                        <div className='mt-8 flex flex-col'>
                            <label>Label (for single select)</label>
                            <Radio.Group name="radiogroup" className='mt-2' defaultValue={1}>
                                <Radio value={1}>A</Radio>
                                <Radio value={2}>B</Radio>
                                <Radio value={3}>C</Radio>
                            </Radio.Group>
                        </div>
                        <div className='mt-8 flex flex-col'>
                            <label>Label (for Multi select)</label>
                            <Radio.Group name="radiogroup" className='mt-2' defaultValue={1}>
                                <Radio value={1}>A</Radio>
                                <Radio value={2}>B</Radio>
                                <Radio value={3}>C</Radio>
                            </Radio.Group>
                        </div>
                        <div className='mt-8 flex flex-col'>
                            <label>Label (for Multi select)</label>
                            <Dropdown.Button
                                icon={<DownOutlined />}
                                loading={loadings[1]}
                                menu={{
                                    items,
                                }}
                                onClick={() => enterLoading(1)}
                                style = {{
                                    width: 400
                                }}
                            >
                                Search
                            </Dropdown.Button>
                        </div>
                        <div className='mt-8 flex flex-col'>
                            <label>Label (for Multi select)</label>
                            <Upload
                                action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                                listType="picture-circle"
                                fileList={fileList}
                                className='mt-2'
                                onPreview={handlePreview}
                                onChange={handleChange}
                            >
                                {fileList.length >= 8 ? null : uploadButton}
                            </Upload>
                            {previewImage && (
                                <Image
                                wrapperStyle={{
                                    display: 'none',
                                }}
                                preview={{
                                    visible: previewOpen,
                                    onVisibleChange: (visible) => setPreviewOpen(visible),
                                    afterOpenChange: (visible) => !visible && setPreviewImage(''),
                                }}
                                src={previewImage}
                                />
                            )}
                        </div>
                        <div className='mt-8 flex flex-col'>
                            <label>Label (for Multi select)</label>
                            <Input rows={4} className='mt-2' placeholder="" maxLength={10} style={{width: 400}}/>
                        </div>
                    </div>
                    <div className='pt-8 bg-slate-100 col-span1 border-l'>
                        <h2 className='text-[14px] font-Lato ml-[25px]' >Options</h2>
                    </div>
                </div>
            </TitleCard>

            {/* <TitleCard
                className="flex-grow"
                title={"Preview & Test Window"}
                isVisible={eyestate}
            >
                <div className='px-20 h-full py-5' style={{ backgroundColor: bkcolor, color: textcolor }}>
                <h1 style={{ color: textcolor }} className='text-center mb-5 pt-8 text-4xl font-bold'>{title}</h1>
                <h2 style={{ color: textcolor }} className='text-2xl mb-5'>{description}</h2>
                <h3 style={{ color: textcolor }} className='text-xl mb-5'>{formlabel}</h3>
                <textarea
                    className='mb-4 w-full rounded-lg'
                    rows={4}
                    placeholder={formfield}
                    maxLength={1000}
                    onChange={e => setMyform(e.target.value)}
                    value={myform}
                    style = {{height: 200}}
                />
                <div wrap className='flex item-center justify-center'>
                    <button
                    className='mr-10 rounded-md w-20 font-bold text-white'
                    style={{ backgroundColor: buttoncolor }}
                    onClick={() => setMyform('')}
                    >
                    Clear<i data-lucide="paintbrush"></i>
                    </button>
                    <button
                    className='rounded-md h-10 w-20 font-bold text-white'
                    style={{ backgroundColor: buttoncolor }}
                    onClick={() => alert('Form submitted!')}
                    >
                    Submit
                    </button>
                </div>
                </div>
            </TitleCard> */}
        </div >
    )
}

export default Result