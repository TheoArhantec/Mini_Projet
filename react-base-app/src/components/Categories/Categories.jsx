import React, { useEffect, useState } from 'react';
import {
  Button,
  Table,
  Modal,
  Popconfirm,
  message
} from 'antd';
import style from './Categories.scss'
import categoryService from '../../Services/Category'
import CreateCategory from './CreateCategory';
import UpdateCategory from './UpdateCategory';

const Categories = () => {

  const [ displayUpdateForm, setDisplayUpdateForm ] = useState(false);
  const [ displayCreateForm, setDisplayCreateForm ] = useState(false);
  const [ updatedCategory, setUpdatedCategory ] = useState({});
  const [categories, setCategories] = useState([{
    key: '1',
    id: 'Mike',
    name: 'hello',
    logo: '10 Downing Street',
    version : 10,
    color: '#FFF'
  }])

  useEffect(() => {
    document.title = 'Categories'
    categoryService.getAll().then(res => {
      setCategories(res.map((category, key) => {
        return {
          key: key,
          id: category._id,
          name: category.name,
          logo: category.logo,
          version : category.version,
          color: category.color
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
    title: 'Logo',
    dataIndex: 'logo',
    key: 'logo',
  },
    {
      title : 'Version',
      dataIndex: 'version',
      key: 'version'
    },
    {
      title : 'Color',
      dataIndex: 'color',
      key: 'color'
    },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: (text, record) => {

      const deleteCategory = (e, id) => {
        console.log(id)
        setCategories(categories.filter(category => category.id !== id));
        categoryService.deleteItem(id);
        message.success('Catégorie effacée');
      }
      console.log(text, record)
      return (
        <div>
          <Button type="text" className={style.warning} onClick={() => openUpdateForm(record)}>modifier</Button>
          <Popconfirm
            title="Etes vous sur de vouloir effacer la catégorie"
            onConfirm={(e) => deleteCategory(e, record.id)}
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
  setUpdatedCategory(record)
  setDisplayUpdateForm(true);
}


  const submitCategory = (object) => {
    console.log(object);
    message.success("Ajout d'une nouvelle catégorie");
    categoryService.create({
      name: object.name,
      logo: object.logo,
      version: parseFloat(object.version),
      color: object.color
    }).then(res => {
      const newCategory = {
        id: res._id,
        name: res.name,
        logo: res.logo,
        version: res.version,
        color: res.color
      }
      setCategories([...categories, newCategory])
    })
    setDisplayCreateForm(false)
  }

  const updateCategory = (data) => {
    console.log(data)
    categoryService.update(data.id, {
      name: data.name,
      logo: data.logo,
      version: parseFloat(data.version),
      color: data.color
    }).then(res => {
      let newCategories = [...categories]
      newCategories = newCategories.filter(category => category.id !== data.id);
      newCategories.push({
        id: res._id,
        name: res.name,
        logo: res.logo,
        version: res.version,
        color: res.color
      })
      setCategories(newCategories);
    })
    message.success("Catégorie mis à jour")
    setUpdatedCategory({})
    setDisplayUpdateForm(false)
  }

    return (
        <div className={style.categories_container} >
            <Table dataSource={categories} columns={columns} footer={() => (
              <Button type={'primary'} onClick={() =>  setDisplayCreateForm(true)}>
                Ajouter une catégorie
              </Button>
            )}/>
              <Modal title="Update form"
                 visible={displayUpdateForm}
                 onOk={updateCategory}
                 onCancel={() => setDisplayUpdateForm(false)}>

                <UpdateCategory submit={updateCategory} category={updatedCategory} />
              </Modal>

            <Modal title={"Ajouter une catégorie"}
                   visible={displayCreateForm}
                   onCancel={() => setDisplayCreateForm(false)}>
              <CreateCategory  submit={submitCategory}/>
            </Modal>
        </div>
    )
}

export default Categories;
