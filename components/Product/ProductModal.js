import { useState, useEffect } from 'react';
import axios from 'axios';
import { parseCookies } from 'nookies';
import { Modal, Button, Container, Row } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import catchErrors from '../../utils/catchErrors';
import baseUrl from '../../utils/baseUrl';

const QuickView = ({ show, handleClose, product, eProduct }) => {

    function refreshPage() {
        window.setTimeout(function(){location.reload()}, 3000)
    }
    
    // console.log(product);
    const { luan_token } = parseCookies();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const [updateProduct, setupdateProduct] = useState({
        id: '',
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
    });

    useEffect(() => {
        setupdateProduct({
            id: product.id,
            title: product.title,
            price: product.price,
            img_url: product.img_url,
            short_description: product.short_description,
            long_description: product.long_description,
            additional_info: product.additional_info,
            sku: product.sku,
            availability: product.availability,
            category: product.category,
            tag: product.tag,
        });
    }, [product]);

    const handleChange = (e) => {
        // console.log(d.value)
        const { name, value, files } = e.target;
        if (name === 'media') {
        let fileSize = files[0].size / 860 / 1090;
        if (fileSize > 2) {
            e.target.value = null;
            return;
        }
        setupdateProduct((prevState) => ({ ...prevState, img_url: files[0] }));
        } else {
            setupdateProduct((prevState) => ({ ...prevState, [name]: value }));
        }
    };

    const handleImageUpload = async () => {
        const data = new FormData();
        data.append('file', updateProduct.img_url);

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
            if (updateProduct.img_url) {
                const imageUrl = await handleImageUpload();
                mediaUrl = imageUrl.replace(/^http:\/\//i, 'https://');
            }
            const {
                id,
                title,
                price,
                short_description,
                long_description,
                additional_info,
                sku,
                availability,
                category,
                tag,
                img_url
            } = updateProduct;

            const url = `${baseUrl}/api/v1/products/${id}`;

            const payload = {
                title,
                price,
                short_description,
                long_description,
                additional_info,
                sku,
                availability,
                category,
                tag,
                img_url:mediaUrl ? mediaUrl : img_url
            };

            const response = await axios.put(url, payload, {
                headers: { Authorization: luan_token },
            });

            eProduct(response.data.products);

            setLoading(false);

            router.replace(`/admin/dashboard`)
            // setProduct(INITIAL_PRODUCT);
        } catch (error) {
            console.log(error);
            catchErrors(error, setError);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Modal
                size='lg'
                aria-labelledby='contained-modal-title-vcenter'
                centered
                show={show}
                onHide={handleClose} 
                className="product-update-modal"
            >
                <Modal.Header closeButton className='close-button'>
                    <Modal.Title>Update Product</Modal.Title>
                </Modal.Header>

                <Modal.Body className="p-3">
                    <Container>
                        <Row>
                            <div className='product-update-form'>
                                <form onSubmit={handleSubmit}>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <div className='form-group'>
                                                <label>Product Name</label>
                                                <input
                                                    className='form-control'
                                                    type='text'
                                                    name='title'
                                                    placeholder='title'
                                                    value={updateProduct.title || ''}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className='col-md-12 col-sm-12'>
                                            <div className='form-group'>
                                                <label>Product Short Description</label>
                                                <textarea
                                                    type='text'
                                                    className='form-control'
                                                    name='short_description'
                                                    value={updateProduct.short_description || ''}
                                                    onChange={handleChange}
                                                    rows="4"
                                                />
                                            </div>
                                        </div>

                                        <div className='col-md-12 col-sm-12'>
                                            <div className='form-group'>
                                                <label>Price</label>
                                                <input
                                                    className='form-control'
                                                    type='text'
                                                    name='price'
                                                    placeholder='Price'
                                                    value={updateProduct.price || ''}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className='col-md-6'>
                                            <div className='form-group'>
                                                <label>Status</label>
                                                <input
                                                    className='form-control'
                                                    placeholder='In Stock'
                                                    name='availability'
                                                    type='text'
                                                    value={updateProduct.availability || ''}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className='col-md-6'>
                                            <div className='form-group'>
                                                <label>SKU</label>
                                                <input
                                                    className='form-control'
                                                    placeholder='SKU'
                                                    name='sku'
                                                    type='text'
                                                    value={updateProduct.sku || ''}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className='col-md-6'>
                                            <div className='form-group'>
                                                <label>Product Category</label>
                                                <input
                                                    type='text'
                                                    className='form-control'
                                                    placeholder='Category'
                                                    name='category'
                                                    value={updateProduct.category || ''}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className='col-md-6'>
                                            <div className='form-group'>
                                                <label>Product Tag</label>
                                                <input
                                                    type='text'
                                                    className='form-control'
                                                    placeholder='Product Tag'
                                                    name='tag'
                                                    value={updateProduct.tag || ''}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className='col-md-12 col-sm-12'>
                                            <div className='form-group'>
                                                <label>Full Details of The Product</label>

                                                <textarea
                                                    type='text'
                                                    className='form-control'
                                                    name='long_description'
                                                    value={updateProduct.long_description || ''}
                                                    onChange={handleChange}
                                                    rows="6"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-12 col-sm-12">
                                            <div className='form-group'>
                                                <label>Additional Information</label>

                                                <textarea
                                                    type='text'
                                                    className='form-control'
                                                    name='additional_info'
                                                    value={updateProduct.additional_info || ''}
                                                    onChange={handleChange}
                                                    rows="6"
                                                />
                                            </div>
                                        </div>

                                        <div className='col-md-12 col-sm-12'>
                                            <div className='form-group'>
                                                <label>Product Image</label>
                                                <input
                                                    type='file'
                                                    name='media'
                                                    className='form-control height-auto'
                                                    onChange={handleChange}
                                                />
                                                <small className="text-muted mt-2 d-block">Recommend image size 860x1090!</small>
                                            </div>
                                        </div>

                                        <div className='col-md-12 col-sm-12'>
                                            <button
                                                className='default-btn product-submit-button'
                                                type='submit' 
                                                onClick={refreshPage}
                                            >
                                                <i className="far fa-edit"></i> Update Product
                                                {loading ? (
                                                    <Spinner
                                                        color='success'
                                                        className='ms-2'
                                                        animation='border'
                                                        size='sm'
                                                    />
                                                ) : (
                                                    ''
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Row>
                    </Container>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" size='sm' onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default QuickView;
