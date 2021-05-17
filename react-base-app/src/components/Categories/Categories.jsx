import React, { useEffect, useState } from 'react';
import {
  Button,
  Table,
  Modal,
  Popconfirm,
  message
} from 'antd';
import style from './Categories.scss'
import CreateCategory from './CreateCategory';
import UpdateCategory from './UpdateCategory';

const Categories = () => {

  const [ displayUpdateForm, setDisplayUpdateForm ] = useState(false);
  const [ displayCreateForm, setDisplayCreateForm ] = useState(false);
  const [ updatedCategory, setUpdatedCategory ] = useState({});

  useEffect(() => { document.title = 'Categories' }, [])

  const dataSource = [
  {
    key: '1',
    id: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    id: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

  const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: (text, record) => {

      const deleteCategory = (e, id) => {
        console.log(id)
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


  const submitCategory = ({libelle}) => {
    message.success("Ajout d'une nouvelle catégorie")
    setDisplayCreateForm(false)
  }

  const updateCategory = (data) => {
  message.success("Catégorie mis à jour")
    console.log(data)
  }

    return (
        <div className={style.categories_container} >
            <Table dataSource={dataSource} columns={columns} footer={() => (
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
