import * as C from './styles';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CountryTS } from '../../types/Country';
import { useApi } from '../../contexts/ApiContext';
import { useForm } from '../../contexts/ThemeContext';

export const CountryPage = () =>{
    const { state } = useForm();
    const { name } = useParams();
    const countries =useApi();

    const [loading,setLoading] = useState();
    const [country, setCountry] = useState<CountryTS[]>([]);
}
    
  
  