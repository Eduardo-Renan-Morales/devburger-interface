
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { api } from "../../../services/api";

import { toast } from 'react-toastify';
import { ErrorMensageStyles } from '../../../components/ErrorMenssage/styles';
import { ButtonStyled, Container, Input, Label, LabelUpload } from "./styles";


function NewProduct() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()

  const schema = yup.object().shape({
    name: yup.string().required('Digite o nome do produto'),
    price: yup.string().required('Digite o preço do produto'),
    category: yup.object().required('Escolha uma categoria'),
    file: yup.mixed().test('requires', ' carregue um arqivo', value => {
      return value && value.length > 0
    })
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

    try {
      await toast.promise(
        api.post("products", productDataformData),
        {
          pending: "Criando novo produto....",
          success: "Produto criado com sucesso",
          error: "Falha ao criar produto",
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
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Label > Nome</Label>
        <Input type='text' {...register("name")} />
        <ErrorMensageStyles>{errors.name?.message}</ErrorMensageStyles>

        <Label > Preço</Label>
        <Input type='number'{...register("price")} />
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
          render={({ field }) => {
            return (
              <Select
                {...field}
                options={categories}
                getOptionLabel={cat => cat.name}
                getOptionValue={cat => cat.id}
                placeholder='Categorias'
              />
            )
          }} >

        </Controller>
        <ErrorMensageStyles>{errors.category?.message}</ErrorMensageStyles>
        <ButtonStyled> Adicionar produto</ButtonStyled>
      </form>
    </Container>
  )

}

export default NewProduct

