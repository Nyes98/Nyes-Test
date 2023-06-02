import { Web3Provider } from '@ethersproject/providers';

function MyPage() {
    const web3Provider = new Web3Provider(window.ethereum);
    // 이제 web3Provider를 사용하여 Web3 기능을 활용할 수 있습니다.

    return (
        <Web3Provider value={web3Provider}>
            <div>{/* 페이지 컨텐츠 */}</div>
        </Web3Provider>
    );
}

export default MyPage;
