import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "./Faq_accord.css";

export default function Faq_accord() {
  return (
    <div>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0" className="custom_made_Acc">
          <Accordion.Header>Is Lucky Me a dapp?</Accordion.Header>
          <Accordion.Body>
            Absolutely! LuckyMe is not just any ordinary lottery game; it's a
            decentralized application (dapp) built on the Binance Smart Chain.
            By leveraging the power of blockchain technology, LuckyMe ensures
            that the lottery process is fair, transparent, and tamper-proof. So,
            if you're a fan of blockchain technology and believe in the
            principles of decentralization, you're going to love LuckyMe!
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Why Lucky Me is different?</Accordion.Header>
          <Accordion.Body>
            Certainly! Lucky Me is not your typical lottery game. What sets it
            apart is its use of smart contracts to ensure transparency and
            fairness. The platform uses blockchain technology to create a secure
            and decentralized system, where participants have complete control
            over their funds and can track every transaction. Additionally,
            Lucky Me offers different types of lottery pools that cater to
            varying levels of risk and reward, giving players more options to
            try their luck. With all these unique features, Lucky Me is
            revolutionizing the world of online lotteries
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>What are odds of winning?</Accordion.Header>
          <Accordion.Body>
            We all know that winning a lottery requires some luck, but at
            LuckyMe, we've designed our system to give you the best possible
            odds of winning. Our smart contract algorithm is specifically
            designed to ensure that the number of winners and the amount of
            prizes awarded are always fair and transparent. We have a variety of
            lottery pools to choose from, each with different prize amounts and
            odds of winning. Some pools may have smaller prizes but higher odds,
            while others may have larger prizes but lower odds. It's up to you
            to decide which pool suits your preference and luck! So, while we
            can't guarantee that you'll win, we can guarantee that you'll have a
            fair chance to win with LuckyMe.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            {" "}
            Is there any eligibility criteria?
          </Accordion.Header>
          <Accordion.Body>
            When it comes to eligibility criteria for Lucky Me, we keep it
            simple and straightforward. As long as you have a compatible digital
            wallet and some stablecoins to purchase entries, you're good to go!
            There are no complex requirements or restrictions based on location,
            age, or income level. We believe that everyone should have the
            opportunity to participate and potentially win big, regardless of
            their background or circumstances. However, we do encourage
            responsible gambling practices and advise against spending more than
            you can afford to lose.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Who manages lotteries?</Accordion.Header>
          <Accordion.Body>
            The lotteries are managed by smart contracts to ensure the integrity
            of the lottery process, which ensure fair and transparent outcomes.
            We believe that trust is essential to building a successful
            platform.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Any age restrictions?</Accordion.Header>
          <Accordion.Body>
            As a decentralized system, Lucky Me does not collect any personal
            information from its users, including age. The platform is built on
            the blockchain, which provides an immutable and transparent record
            of all transactions without the need for a central authority or
            intermediary. This means that participants are responsible for
            verifying their eligibility to participate in the lottery according
            to their local laws and regulations. Lucky Me operates under the
            assumption that all participants are of legal age to gamble in their
            respective jurisdictions and does not require any age verification
            or personal information to be provided. Lucky Me remains committed
            to maintaining the principles of decentralization and user privacy,
            ensuring a fair and transparent platform for all users to
            participate in the lottery without compromising their personal
            information.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            How can I participate in Lucky Me?
          </Accordion.Header>
          <Accordion.Body>
            To participate in Lucky Me, you need to have a Binance Smart
            Chain-supported wallet, connect it to the dapp, and purchase entries
            in the desired pool(s). Or you can check it on How To Use page.To
            participate in Lucky Me, you need to have a Binance Smart
            Chain-supported wallet, connect it to the dapp, and purchase entries
            in the desired pool(s). Or you can check it on How To Use page.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>
            How many types of lottery pools are there?
          </Accordion.Header>
          <Accordion.Body>
            At Lucky Me, we offer a variety of pools for our users to
            participate in. With 16 pools to choose from, you're sure to find
            one that suits your preferences. So whether you're a high roller or
            just looking to try your luck, there's a pool for you at Lucky Me.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>Is any time limit in pools?</Accordion.Header>
          <Accordion.Body>
            Absolutely! Each LuckyMe pool has a specific time limit, which is
            predetermined at the beginning of each round. The pool will end
            automatically once the time limit has been reached or when the total
            number of entries has been filled, whichever happens first. This
            ensures that every participant has an equal chance of winning and
            that the pool is closed in a timely manner. This means that you can
            stay on top of each pool's progress and plan your entries
            accordingly to maximize your chances of winning. So, keep an eye out
            for the time limit and don't miss your chance to participate!
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>
            What happens if total entries get full before round-up time?
          </Accordion.Header>
          <Accordion.Body>
            If the total number of entries is filled before the round-up time,
            the lottery will end early, and winners will be announced and
            rewarded accordingly. And a new round will start immediately, and
            new participants will be allotted to the new round. This ensures
            that every participant has an equal chance to win and prevents any
            unfair advantage for those who enter earlier. So, don't worry if you
            miss out on a round, you can always participate in the next one.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="10">
          <Accordion.Header>
            Is there any limit for participation in pools?
          </Accordion.Header>
          <Accordion.Body>
            Just like the ocean has its own depth, each pool has its own unique
            entry limit. Some pools have a shallow end, allowing only a handful
            of participants, while others have a deeper end, accommodating a
            larger crowd. The minimum and maximum entry limits vary from pool to
            pool, so make sure to check the details before diving in. Whether
            you prefer to dip your toes or dive in headfirst, there's a pool for
            everyone at LuckyMe.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="11">
          <Accordion.Header>
            In how many lottery pools can I participate at a time?
          </Accordion.Header>
          <Accordion.Body>
            At LuckyMe, we want to give everyone an equal chance to win big!
            That's why we allow participants to enter multiple pools
            simultaneously. So whether you want to spread your luck across
            different pools or increase your chances in a single pool, the
            choice is yours. Just remember to play responsibly and within your
            means. Good luck!
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="12">
          <Accordion.Header>
            What happens if I am the only one to participate in a particular
            lottery pool?
          </Accordion.Header>
          <Accordion.Body>
            If you happen to be the only one taking part in a pool, then you're
            in for a treat! Lucky you! The pool is immediately canceled, and
            you'll get a full refund of your BUSD back to your wallet. So, don't
            worry about having to compete against anyone else. You get to keep
            your BUSD, and who knows, maybe you'll get lucky in the next pool
            you enter!
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="13">
          <Accordion.Header>How are winners selected?</Accordion.Header>
          <Accordion.Body>
            Winners will be selected based on two methods: the total number of
            entries filled or the winner's ratio method, which determines the
            number of winners based on the ratio of the received entries to the
            total expected entries. This ensures a fair and transparent
            selection process that is conducted automatically by the smart
            contract, without any human intervention or bias.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="14">
          <Accordion.Header>What is a smart contract?</Accordion.Header>
          <Accordion.Body>
            A smart contract is a computer program that automatically enforces
            the rules and regulations of the lottery game. It is built on a
            blockchain network, which ensures that the contract cannot be
            altered or manipulated once it is deployed. The smart contract
            ensures transparency and fairness in the game by eliminating the
            need for a third-party intermediary to oversee the lottery. It
            executes the lottery rules automatically and distributes the
            winnings to the winners based on pre-defined criteria. The use of
            smart contracts also ensures that the lottery system is secure and
            tamper-proof, providing players with a safe and reliable gaming
            experience.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="15">
          <Accordion.Header>
            What is the maximum number of jackpots per day? Is there any limit?
          </Accordion.Header>
          <Accordion.Body>
            At LuckyMe, there is no limit on the number of jackpots per day. Our
            decentralized system ensures that the lottery is fair and
            transparent, with each round having an equal chance to win. So, if
            you're feeling lucky, go ahead and try your chances at winning big!
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="16">
          <Accordion.Header>
            Who is eligible to buy the entries?
          </Accordion.Header>
          <Accordion.Body>
            All individuals who have a Binance Smart Chain (BSC) compatible
            wallet and hold BUSD are eligible to buy entries and participate in
            the LuckyMe lottery pools. Since it is a decentralized system, there
            is no need for any registration or identification process to
            participate, ensuring equal opportunities for everyone. The only
            requirement is to have sufficient BUSD balance in your wallet to
            purchase the desired number of entries.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="17">
          <Accordion.Header>
            Can I participate with other stable coins?
          </Accordion.Header>
          <Accordion.Body>
            Only BUSD (Binance USD) is accepted as a form of payment for
            purchasing entries. The use of stablecoins ensures that the value of
            your winnings remains stable, protecting you from the volatility of
            other cryptocurrencies.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="18">
          <Accordion.Header>What if there is no winner?</Accordion.Header>
          <Accordion.Body>
            If someone has participated in a pool, then there will always be a
            winner. It is not possible for a pool to end without a winner
            because the smart contract is designed to select a winner at the end
            of each round. If, for some reason, numbers of entries is less then
            a certain participates in a pool and round is up, then the pool will
            be canceled, and all funds will be returned to the participants'
            wallets. Lucky Me is committed to providing fair and transparent
            lottery games for all participants.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="19">
          <Accordion.Header>
            Where can I see how many entries are left?
          </Accordion.Header>
          <Accordion.Body>
            You can view the number of entries left in each pool on the Lucky Me
            dapp's dashboard.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="20">
          <Accordion.Header> Can I enter multiple times?</Accordion.Header>
          <Accordion.Body>
            Yes, you can enter multiple times in a pool to increase your chances
            of winning. However, please note that each entry will require a
            separate purchase and will increase your overall spending. So, it's
            important to gamble responsibly and never spend more than you can
            afford to lose. Good luck!
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="21">
          <Accordion.Header>
            Can I purchase multiple entries with a single wallet?
          </Accordion.Header>
          <Accordion.Body>
            Yes, you can purchase multiple entries with a single wallet. Lucky
            Me allows you to buy as many entries as you want, depending on the
            number of available entries in a pool. Just make sure that you have
            enough funds in your wallet to purchase all the entries you want.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="22" className="custom_made_Acc">
          <Accordion.Header className="">
            Can i enter with multiple entries?
          </Accordion.Header>
          <Accordion.Body>
            Yes, you can enter with multiple entries, provided that you have
            enough funds in your wallet to purchase all of them. Lucky Me does
            not limit the number of entries that a participant can purchase, so
            you can increase your chances of winning by buying more entries in a
            pool. Just remember that you should always gamble responsibly and
            never spend more than you can afford to lose.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
