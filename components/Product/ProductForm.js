import React from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { parseCookies } from 'nookies';
import axios from 'axios';
import { toast } from "react-hot-toast";
import Link from 'next/link';
import catchErrors from '../../utils/catchErrors';
import baseUrl from '../../utils/baseUrl';

import controls from "../../utils/RTEControl";
import dynamic from "next/dynamic";
const RichTextEditor = dynamic(() => import("@mantine/rte"), {
	ssr: false,
	loading: () => null,
});

const INITIAL_PRODUCT = {
    title: '',
    price: '',
    img_url: '',
    short_description: '',
    long_description: '',
    additional_info: '',
    sku: '',
    availability: '',
    category: '',
    tag: '',
};

const ProductForm = () => {

    const { luan_token } = parseCookies();
    const [product, setProduct] = React.useState(INITIAL_PRODUCT);
    const [disabled, setDisabled] = React.useState(true);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');
    const [mediaPreview, setMediaPreview] = React.useState('');
    const onDismiss = () => setError(false);

    React.useEffect(() => {
        const isProduct = Object.values(product).every((el) => Boolean(el));
        isProduct ? setDisabled(false) : setDisabled(true);
    }, [product]);

    const handleChange = (e) => {
        // console.log(d.value)
        const { name, value, files } = e.target;
        if (name === 'media') {
            let fileSize = files[0].size / 860 / 1090;
            if (fileSize > 2) {
                toast.error("The file size greater than 2 MB. Make sure less than 2 MB.");
                e.target.value = null;
                return;
            }
            setProduct((prevState) => ({ ...prevState, img_url: files[0] }));
            setMediaPreview(window.URL.createObjectURL(files[0]));
        } else {
            setProduct((prevState) => ({ ...prevState, [name]: value }));
        }
        // console.log(post);
    };

    const handleImageUpload = async () => {
        // console.log(post.file_url)
        const data = new FormData();
        data.append('file', product.img_url);

        data.append("upload_preset", process.env.UPLOAD_PRESET);
        data.append("cloudinary_name", process.env.CLOUDINARY_NAME);
         
        const response = await axios.post(process.env.CLOUDINARY_URL, data);
        const mediaUrl = response.data.url;
        return mediaUrl;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            setError('');
            let mediaUrl = '';
            if (product.img_url) {
                const imageUrl = await handleImageUpload();
                mediaUrl = imageUrl.replace(/^http:\/\//i, 'https://');
            }
            const url = `${baseUrl}/api/v1/products/create`;
            const {
                title,
                price,
                short_description,
                long_description,
                additional_info,
                sku,
                availability,
                category,
                tag,
            } = product;
            const payload = {
                title,
                price,
                short_description,
                long_description,
                additional_info,
                sku,
                mediaUrl,
                availability,
                category,
                tag,
            };
            await axios.post(url, payload, {
                headers: { Authorization: luan_token },
            });
            // console.log(response.data)
            setLoading(false);
            // router.push(`/product/create`)
            setProduct(INITIAL_PRODUCT);
            toast.success("Product created successfully.");
            setSuccess(true);
        } catch (error) {
            catchErrors(error, setError);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className='register-form'>
                <Alert
                    variant='danger'
                    show={error ? true : false}
                    onClose={onDismiss} 
                    dismissible
                >
                    {error}
                </Alert>
 
                <div className="row">
                    <div className="col text-end">
                        <Link href="/admin/dashboard/">
                            <a className="btn btn-dark btn-sm">
                                See All Products
                            </a>
                        </Link>
                    </div>
                </div>
                
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label>Product Name <span className="red" title="Must fillup the field">*</span></label>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Product Name'
                            name='title'
                            value={product.title}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='form-group'>
                        <label>Product Short Description <span className="red" title="Must fillup the field">*</span></label>
                        <textarea
                            type='text'
                            className='form-control'
                            placeholder='Type here...'
                            name='short_description'
                            value={product.short_description}
                            onChange={handleChange}
                            rows="4"
                        />
                    </div>

                    <div className='form-group'>
                        <label>Price <span className="red" title="Must fillup the field">*</span></label>
                        <input
                            className='form-control'
                            placeholder='100.00'
                            name='price'
                            type='number'
                            value={product.price}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <div className='form-group'>
                                <label>Status <span className="red" title="Must fillup the field">*</span></label>
                                <input
                                    className='form-control'
                                    placeholder='In Stock'
                                    name='availability'
                                    type='text'
                                    value={product.availability}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className='form-group'>
                                <label>SKU <span className="red" title="Must fillup the field">*</span></label>
                                <input
                                    className='form-control'
                                    placeholder='SKU'
                                    name='sku'
                                    type='text'
                                    value={product.sku}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className='form-group'>
                                <label>Product Category <span className="red" title="Must fillup the field">*</span></label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Category'
                                    name='category'
                                    value={product.category}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className='form-group'>
                                <label>Product Tag <span className="red" title="Must fillup the field">*</span></label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Product Tag'
                                    name='tag'
                                    value={product.tag}
                                    onChange={handleChange} 
                                />
                            </div>
                        </div>
                    </div>
            
                    <div className="row">
                        <div className="col-lg-6">
                            <div className='form-group'>
                                <label>Full Details of The Product <span className="red" title="Must fillup the field">*</span></label>

                                <RichTextEditor
                                    controls={controls}
                                    value={product.long_description}
                                    onChange={(e) =>
                                        setProduct((prevState) => ({
                                            ...prevState,
                                            long_description: e,
                                        }))
                                    }
                                />
                            </div>
                        </div>
                    
                        <div className="col-lg-6">
                            <div className='form-group'>
                                <label>Additional Information <span className="red" title="Must fillup the field">*</span></label>

                                <RichTextEditor
                                    controls={controls}
                                    value={product.additional_info}
                                    onChange={(e) =>
                                        setProduct((prevState) => ({
                                            ...prevState,
                                            additional_info: e,
                                        }))
                                    }
                                />
                            </div>
                        </div>
                    </div>

                    <div className='form-group'>
                        <label>Product Image <span className="red" title="Must fillup the field">*</span></label>
                        <input 
                            type='file' 
                            name='media' 
                            onChange={handleChange} 
                        />
                        <small className="text-muted mt-2 d-block">Recommend image size 860x1090!</small>
                    </div>

                    <button type='submit' className="default-btn" disabled={disabled}>
                        Create Product {' '}
                        {loading ? <Spinner color='success' /> : ''}
                    </button>
                </form>
            </div>
        </>
    );
};

export default ProductForm;
