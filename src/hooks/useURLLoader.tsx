import {useState, useEffect} from 'react';
import axios from 'axios';

// deps: 什么情况下出发数据的加载
const useURLLoader = (url: string, deps: any[] = []) => {
    // 当添加 null 类型判断会有问题， 所以用 <any>
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        axios.get(url).then(result => {
            setData(result.data);
            setLoading(false);
        })
    }, deps)
    return [data, loading];
}

export default useURLLoader;

