import MainIntro from '../../components/main/intro/MainIntro';
import MainNftSection from '../../components/main/nft/NftSection';
import Web3Section from '../../components/main/web3/Web3Section';
import MileStoneSection from '../../components/main/milestone/MileStone';
import FAQSection from '../../components/main/faq/FAQ';
import MembershipSection from '../../components/main/membership/MembershipSection';
import SpotSection from '../../components/main/spot/SpotSection';

export default function Home() {
    return (
        <>
            <MainIntro />
            <MainNftSection />
            <Web3Section />
            <MileStoneSection />
            <FAQSection />
            <MembershipSection />
            <SpotSection />
        </>
    );
}
