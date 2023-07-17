import * as C from './styles';
import { useEffect, useState } from 'react';
import { Input } from '../../components/Input/Input';
import { useForm } from '../../contexts/ThemeContext';
import { useApi } from '../../contexts/ApiContext';

const LIMIT = 24;

export const Countries = () => {
  const { state } = useForm();
  const countries = useApi();

  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [offset, setOffset] = useState(0);
  const [showNoCountryMessage, setShowNoCountryMessage] = useState(false); // if "region has no searched country" message

  useEffect(() => {
    getAllCountries();
  }, []);

  useEffect(() => {
    setOffset(0);
  }, [search, selectedRegion]);

  const getAllCountries = async () => {
    setLoading(true);
    try {
    } catch (error) {
      console.error('Error fetching countries:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  const handleSelectRegion = (region: string) => {
    setSelectedRegion(region);
  };


  return (
    <C.CountriesArea theme={state.theme}>
      <Input value={search} search={handleSearch} selectRegion={handleSelectRegion} />
    </C.CountriesArea>
  );
};
