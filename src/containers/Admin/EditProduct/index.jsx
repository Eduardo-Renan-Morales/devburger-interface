
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router-dom';
import Select from 'react-select';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { api } from "../../../services/api";

import { toast } from 'react-toastify';
import { ErrorMensageStyles } from '../../../components/ErrorMenssage/styles';
import { ButtonStyled, Container, ContainerInput, Input, Label, LabelOffer, LabelUpload, Title } from "./styles";


function EditProduct() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()
  const location = useLocation()

  const product = location.state

  const schema = yup.object().shape({
    name: yup.string().required('Digite o nome do produto'),
    price: yup.string().required('Digite o preço do produto'),
    category: yup.object().required('Escolha uma categoria'),
    offer: yup.bool()
  })

  const { register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data) => {
    const productDataformData = new FormData();

    // Verificação de segurança para evitar erro ao acessar dados de arquivos
    if (data.file && data.file.length > 0) {
      productDataformData.append("file", data.file[0]);
    }

    productDataformData.append("name", data.name);
    productDataformData.append("price", data.price);
    productDataformData.append("category_id", data.category.id);

    productDataformData.append("offer", data.offer);

    try {
      await toast.promise(
        api.put(`products/${product.id}`, productDataformData),
        {
          pending: "Editando produto....",
          success: "Produto editado com sucesso",
          error: "Falha ao editar produto",
        }
      );
      navigate("/listar-produtos");
    } catch (error) {
      console.error("Erro ao criar produto:", error);
    }
  };
  useEffect(() => {
    async function loadCategoris() {
      try {
        const { data } = await api.get('categories');

        setCategories(data)
      } catch (error) {
        console.error('Erro ao carregar aba de Novo produto:', error);
      }
    }
    loadCategoris();
  }, []);

  return (
    <Container>

      <Title> Editar produto</Title>



      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Label > Nome</Label>
        <Input type='text' {...register("name")} defaultValue={product.name} />
        <ErrorMensageStyles>{errors.name?.message}</ErrorMensageStyles>

        <Label > Preço</Label>
        <Input type='number'{...register("price")} defaultValue={product.price} />
        <ErrorMensageStyles>{errors.price?.message}</ErrorMensageStyles>

        <LabelUpload>
          {fileName ? fileName : (
            <>
              <CloudUploadOutlinedIcon />
              Carregue a imagem o produto
            </>
          )}
          <input
            type="file"
            accept='image/png, image/jpeg'
            {...register("file")}
            onChange={value => {
              setFileName(value.target.files[0]?.name)

            }}
          />
        </LabelUpload>
        <ErrorMensageStyles>{errors.file?.message}</ErrorMensageStyles>
        <Controller
          name='category'
          control={control}
          defaultValue={product.category}
          render={({ field }) => {
            return (
              <Select
                {...field}
                options={categories}
                getOptionLabel={cat => cat.name}
                getOptionValue={cat => cat.id}
                placeholder='Categorias'
                defaultValue={product.category}
              />
            )
          }} >

        </Controller>
        <ErrorMensageStyles>{errors.category?.message}</ErrorMensageStyles>

        <ContainerInput>
          <input type='checkbox'  {...register("offer")} defaultChecked={product.offer} />

          <LabelOffer> Produto em oferta ? </LabelOffer>

        </ContainerInput>

        <ButtonStyled> Aditar produto</ButtonStyled>
      </form>
    </Container>
  )

}

export default EditProduct

