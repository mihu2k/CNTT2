import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

import { SearchIcon } from '~/components/icons';
import { Wrapper as PopperWrapper } from '~/components/popper';
import ProductItem from '~/components/product-item';
import { useDebounce } from '~/hooks';
import ProductService from '~/services/product.service';
import styles from './search.css';

const cx = classNames.bind(styles);

function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [searchValue, setSearchValue] = useState({
    search: '',
    per_page: 'all',
  });
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);

  const debouncedValue = useDebounce(searchValue, 500);

  const inputRef = useRef();
  useEffect(() => {
    if (!debouncedValue.search.trim()) {
      setSearchResult([]);
      return;
    }
    // Before call API

    setLoading(true);

    // Call API
    const fetchApi = async () => {
      const result = await ProductService.getAll(debouncedValue);
      setSearchResult(result.data?.data);
      setLoading(false);
    };

    fetchApi();
  }, [debouncedValue]);

  const handleClear = () => {
    setSearchValue({
      search: '',
      per_page: 'all',
    });
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleHideResults = () => {
    setShowResults(false);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(' ')) {
      setSearchValue((prev) => ({ ...prev, search: searchValue }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    // Using a wrapper div tag around the reference element solves
    // this by creating a new parentNode context
    <div>
      <HeadlessTippy
        interactive={true}
        visible={showResults && searchResult.length > 0}
        onClickOutside={handleHideResults}
        render={(attrs) => (
          <div className={cx('search-results')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
              <h4 className={cx('search-title')}>Sản phẩm</h4>
              {searchResult?.map((result) => (
                <ProductItem key={result.id} data={result} />
              ))}
            </PopperWrapper>
          </div>
        )}
      >
        <div className={cx('search')}>
          <input
            ref={inputRef}
            value={searchValue.search}
            placeholder="Chúng tôi có thể giúp bạn tìm kiếm?"
            spellCheck={false}
            onChange={handleChange}
            onFocus={() => {
              setShowResults(true);
            }}
          />
          {!!searchValue.search && !loading && (
            <button className={cx('clear')} onClick={handleClear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}
          {loading && (
            <button className={cx('loading')}>
              <FontAwesomeIcon icon={faSpinner} />
            </button>
          )}
          <button className={cx('search-btn')} onMouseDown={handleSubmit}>
            <SearchIcon />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
