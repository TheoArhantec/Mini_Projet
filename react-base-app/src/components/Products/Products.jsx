import React, { useEffect, useState } from 'react';
import { Button, message, Modal, Popconfirm, Table } from 'antd';
import style from '../Categories/Categories.scss';
import productService from '../../Services/Product'
import UpdateCategory from '../Categories/UpdateCategory';
import CreateCategory from '../Categories/CreateCategory';
import set from '@babel/runtime/helpers/esm/set';
import CreateProduct from './CreateProduct';
import UpdateProduct from './UpdateProduct';

const Products = () => {

    const [ displayUpdateForm, setDisplayUpdateForm ] = useState(false);
    const [ displayCreateForm, setDisplayCreateForm ] = useState(false);
    const [ updatedProduct, setUpdatedProduct ] = useState({});
    const [ products, setProducts] = useState([{
      key : '1',
      id: 'Mike',
      name: 'hello',
      brand: '10 Downing Street',
      price : 10
    }])

    useEffect(() => {
      document.title = 'Categories'
      const all  = productService.getAll()
      all.then((res) => {
        setProducts(res.map((product, key) => {
          return {
            key : key,
            id: product._id,
            name: product.name,
            brand: product.brand,
            price : product.price
          }
        }))
      })
    }, [])

    const columns = [
      {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Brand',
        dataIndex: 'brand',
        key: 'brand',
      },
      {
        title : 'Price',
        dataIndex: 'price',
        key: 'price'
      },
      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: (text, record) => {

          const deleteProduct = async (e, id) => {
            await productService.deleteItem(id);
            setProducts(products.filter(product => product.id !== id));
            message.success('Produit effacé');
          }
          return (
            <div>
              <Button type="text" className={style.warning} onClick={() => openUpdateForm(record)}>modifier</Button>
              <Popconfirm
                title="Etes vous sur de vouloir effacer le produit"
                onConfirm={(e) => deleteProduct(e, record.id)}
                onCancel={() => null}
                okText= "Oui"
                cancelText="Non"
              >
                <a className={style.error} href='#'>Effacer</a>
              </Popconfirm>
            </div>
          )
        }
      }
    ];

    const openUpdateForm = (record) => {
      console.warn(record)
      setUpdatedProduct(record)
      setDisplayUpdateForm(true);
    }


    const submitProduct = (e) => {
      message.success("Ajout d'un nouveau produit")
      productService.create({
        name : e.name,
        price: e.price,
        brand : e.brand
      }).then(res => {
        const newProduct = {
          id : res._id,
          name : res.name,
          price: res.price,
          brand: res.brand,
        }
        setProducts([...products, newProduct])
      })
      setDisplayCreateForm(false)
    }

    const updateProduct = (data) => {
      console.log(data)
      productService.update(data.id, {
        name : data.name,
        brand: data.brand,
        price : data.price
      }).then(res => {
        let newProducts = [...products]
        newProducts = newProducts.filter(product => product.id !== data.id);
        newProducts.push({
          id : res._id,
          name : res.name,
          brand: res.brand,
          price : res.price
        })
        setProducts(newProducts);
      })
      message.success("Produit mis à jour")
      setUpdatedProduct({});
      setDisplayUpdateForm(false);
    }

    return (
      <div className={style.categories_container} >
        <Table dataSource={products} columns={columns} footer={() => (
          <Button type={'primary'} onClick={() =>  setDisplayCreateForm(true)}>
            Ajouter une catégorie
          </Button>
        )}/>
        <Modal title="Update form"
               visible={displayUpdateForm}
               onOk={updateProduct}
               onCancel={() => setDisplayUpdateForm(false)}>

          <UpdateProduct submit={updateProduct} product={updatedProduct} />
        </Modal>

        <Modal title={"Ajouter une catégorie"}
               visible={displayCreateForm}
               onCancel={() => setDisplayCreateForm(false)}>
          <CreateProduct  submit={submitProduct}/>
        </Modal>
      </div>
    )
}

export default Products;
