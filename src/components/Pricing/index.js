import React from 'react';
import Icon1 from '../../images/pricing1.svg';
import Icon2 from '../../images/pricing2.svg';
import Icon3 from '../../images/pricing3.svg';
import {PricesContainer, PricingH1, PricingWrapper, PricingCard, PricingIcon, PricingH2, PricingH4, PricingP} from './PricingElements'
const Pricing = () => {
    return (
        <PricesContainer id="pricing">
            <PricingH1>Our Pricing</PricingH1>
            <PricingWrapper>
                <PricingCard>
                    <PricingIcon src={Icon1}/>
                    <PricingH2>Starter Pack</PricingH2><br/>
                    <PricingH4>Free</PricingH4>
                    <PricingP>We help in Assisting You in getting an Educational Loan</PricingP>
                </PricingCard>

                <PricingCard>
                    <PricingIcon src={Icon2}/>
                    <PricingH2>Silver Pack</PricingH2><br/>
                    <PricingH4>&#x20b9; 5000</PricingH4>
                    <PricingP>We help in Assisting You in getting an Educational Loan + University Shortlisting</PricingP>
                </PricingCard>

                <PricingCard>
                    <PricingIcon src={Icon3}/>
                    <PricingH2>Gold Pack</PricingH2><br/>
                    <PricingH4>&#x20b9; 10,000</PricingH4>
                    <PricingP>We help in Assisting You in getting an Educational Loan + University Shortlisting + Scholarship Assist</PricingP>
                </PricingCard>
            </PricingWrapper>
        </PricesContainer>
    )
}

export default Pricing
