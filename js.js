const Block = ({ HeaderTag = 'h2', headerText, className = '', children }) => (
  <div className={className}>
    <HeaderTag>{headerText}</HeaderTag>
    {children}
  </div>
);

const CountryFilter = ({ value, onChange, countries }) => (
  <Block headerText="Country">
    <select onChange={onChange} value={value}>
      <option value="">-- Country --</option>
      {countries.map(n => <option key={n}>{n}</option>)}
    </select>
  </Block>
);

const SizeFilter = ({ value, onChange, sizes }) => (
  <Block headerText="Size">
    {sizes.map(n => (
      <label className="size" key={n}>
        <input
          type="checkbox"
          value={n}
          checked={value.includes(n)}
          onChange={onChange}
        />
        {n}
      </label>
    ))}
  </Block>
);

const PriceInput = ({ index, ...props }) => (
  <input className="price-input" data-index={index} {...props} />
);

const PriceFilter = ({ value, onChange }) => (
  <Block headerText="Price">
    <PriceInput value={value[0]} onChange={onChange} index="0" />
    &nbsp;-&nbsp;
    <PriceInput value={value[1]} onChange={onChange} index="1" />
    &nbsp;usd&nbsp;
  </Block>
);

const GoodsList = ({ goods }) => (
  <div>
    {goods.map(n => (
      <Block className="good" HeaderTag="h3" headerText={n.name} key={n.id}>
        <img src={n.image} />
        <p>Цена: {n.cost}</p>
        <button data-art={n.name}>Купить</button>
      </Block>
    ))}
  </div>
);

const App = ({ goods }) => {
  const countries = React.useMemo(() => [...new Set(goods.map(n => n.country))], [ goods ]);
  const sizes = React.useMemo(() => [...new Set(goods.map(n => n.size))], [ goods ]);

  const [ country, setCountry ] = React.useState('');
  const [ size, setSize ] = React.useState([]);
  const [ price, setPrice ] = React.useState([ '', '' ]);

  const onCountryChange = e => setCountry(e.target.value);
  const onSizeChange = ({ target: { checked, value } }) => {
    setSize((!size.includes(value) && checked)
      ? [ ...size, value ]
      : size.filter(n => n !== value)
    );
  };
  const onPriceChange = ({ target: { value, dataset: { index } } }) => {
    setPrice(price.map((n, i) => i === +index ? value : n));
  };

  const filteredGoods = goods.filter(n => (
    (!country || n.country === country) &&
    (!size.length || size.includes(n.size)) &&
    (!price[0] || price[0] <= n.cost) &&
    (!price[1] || price[1] >= n.cost)
  ));

  return (
    <div>
      <div className="filters">
        <CountryFilter value={country} onChange={onCountryChange} countries={countries} />
        <SizeFilter value={size} onChange={onSizeChange} sizes={sizes} />
        <PriceFilter value={price} onChange={onPriceChange} />
      </div>
      <GoodsList goods={filteredGoods} />
    </div>
  );
}

const DATA = [
  {
    "sex" : "male",
    "name" : "Рубашка №1",
    "cost" : 1000,
    "country" : "france",
    "image" : "http://i.piccy.info/i9/9921ed03bf45751d45447b15e78be751/1566814909/19890/1334636/1.jpg",
    "size": "S"
  },
  {
    "sex" : "male",
    "name" : "Рубашка №2",
    "cost" : 1200,
    "country" : "turkey",
    "image" : "http://i.piccy.info/i9/acc4df9b14e48a42d7cd353e923673e7/1566814962/22015/1334636/2.jpg",
    "size": "M"
  },
  {
    "sex" : "male",
    "name" : "Рубашка №3",
    "cost" : 1700,
    "country" : "china",
    "image" : "http://i.piccy.info/i9/174610be67bfea39f99c956885ae3786/1566815027/25896/1334636/3.jpg",
    "size": "L"
  },
  {
    "sex" : "male",
    "name" : "Рубашка №4",
    "cost" : 2000,
    "country" : "turkey",
    "image" : "http://i.piccy.info/i9/e2e5c6cb274121b9898b7d45a085130f/1566815049/29582/1334636/4.jpg",
     "size": "XL"
  },
  {
    "sex" : "female",
    "name" : "Платье №1",
    "cost" : 1700,
    "country" : "russia",
    "image" : "https://img.ostin.com/upload/mdm/media_content/resize/ef7/867_1200_9186/39234680299.jpg?1",
    "size": "XXL"
  },
  {
    "sex" : "female",
    "name" : "Платье №2",
    "cost" : 1400,
    "country" : "france",
    "image" : "https://img.ostin.com/upload/mdm/media_content/resize/834/686_950_ea58/42401730299.jpg",
    "size": "M"
  },
  {
    "sex" : "male",
    "name" : "Футболка №1",
    "cost" : 2100,
    "country" : "turkey",
    "image" : "https://img.ostin.com/upload/mdm/media_content/resize/9a9/686_950_4b86/27272280299.jpg",
    "size": "S"
  },
  {
    "sex" : "male",
    "name" : "Футболка №2",
    "cost" : 1899,
    "country" : "china",
    "image" : "https://img.ostin.com/upload/mdm/media_content/resize/0c7/686_950_9483/39389650299.jpg",
    "size": "L"
  },
  {
    "sex" : "male",
    "name" : "Футболка №3",
    "cost" : 700,
    "country" : "russia",
    "image" : "https://img.ostin.com/upload/mdm/media_content/resize/662/686_950_ae2a/39536520299.jpg",
    "size": "XL"
  },
  {
    "sex" : "female",
    "name" : "Юбка №1",
    "cost" : 999,
    "country" : "france",
    "image" : "https://img.ostin.com/upload/mdm/media_content/resize/bb2/867_1200_8763/39228890299.jpg?1",
    "size": "XXL"
  },
  {
    "sex" : "female",
    "name" : "Юбка №2",
    "cost" : 1749,
    "country" : "turkey",
    "image" : "https://img.ostin.com/upload/mdm/media_content/resize/339/332_460_ed68/43790380299.jpg",
    "size": "S"
  },
  {
    "sex" : "female",
    "name" : "Юбка №3",
    "cost" : 2399,
    "country" : "russia",
    "image" : "https://img.ostin.com/upload/mdm/media_content/resize/77f/686_950_cb27/22562490299.jpg",
    "size": "M"
  },
  {
    "sex" : "male",
    "name" : "Толстовка №1",
    "cost" : 3000,
    "country" : "china",
    "image" : "https://img.ostin.com/upload/mdm/media_content/resize/597/686_950_c697/35824810299.jpg",
    "size": "L"
  },
  {
    "sex" : "male",
    "name" : "Толстовка №2",
    "cost" : 2299,
    "country" : "france",
    "image" : "https://img.ostin.com/upload/mdm/media_content/resize/1a0/686_950_3631/36425000299.jpg",
    "size": "XL"
  },
  {
    "sex" : "male",
    "name" : "Толстовка №3",
    "cost" : 1900,
    "country" : "turkey",
    "image" : "https://img.ostin.com/upload/mdm/media_content/resize/eb7/686_950_a8c2/41192030299.jpg",
    "size": "XXL"
  },
  {
    "sex" : "male",
    "name" : "Брюки №1",
    "cost" : 1000,
    "country" : "france",
    "image" : "https://img.ostin.com/upload/mdm/media_content/resize/92e/686_950_0493/37112900299.jpg",
    "size": "M"
  },
  {
    "sex" : "male",
    "name" : "Брюки №2",
    "cost" : 1900,
    "country" : "russia",
    "image" : "https://img.ostin.com/upload/mdm/media_content/resize/281/686_950_ea0e/41832420299.jpg",
    "size": "S"
  },
  {
    "sex" : "male",
    "name" : "Брюки №3",
    "cost" : 1400,
    "country" : "france",
    "image" : "https://img.ostin.com/upload/mdm/media_content/resize/3bd/686_950_84e5/39425950299.jpg",
    "size": "XL"
  },
  {
    "sex" : "female",
    "name" : "Джемпер №1",
    "cost" : 1090,
    "country" : "turkey",
    "image" : "https://img.ostin.com/upload/mdm/media_content/resize/397/686_950_bf51/39347190299.jpg",
    "size": "L"
  },
  {
    "sex" : "female",
    "name" : "Джемпер №2",
    "cost" : 800,
    "country" : "france",
    "image" : "https://img.ostin.com/upload/mdm/media_content/resize/e5d/686_950_35ad/39346740299.jpg",
    "size": "S"
  },
  {
    "sex" : "female",
    "name" : "Джемпер №3",
    "cost" : 1200,
    "country" : "china",
    "image" : "https://img.ostin.com/upload/mdm/media_content/resize/25f/686_950_9ba8/38553430299.jpg",
    "size": "M"
  }
  
].map((n, i) => ({ ...n, id: i + 1 }));

ReactDOM.render(<App goods={DATA} />, document.getElementById('app'));
