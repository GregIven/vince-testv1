import React from 'react';

import { 
    FormContainer, 
    FormHeader, 
    FormSubHeader, 
    FormWrapper, 
    QuoteFormInput, 
    FormSubmitBtn,
    ColumnWrapper1,
    ColumnWrapper2,
    Disclaimer1,
    Disclaimer2,
    HolidaysListed,
    HoursHeader,
    HoursListed,
    ObservationHeader,
    ObservationParagraph

    } from './QuoteFormStyles';

const QuoteForm = () => {
    // const classes = useStyles();

    return (
        <FormContainer>
            <ColumnWrapper1>
                <FormHeader>Request a Quote</FormHeader>
                <FormSubHeader>Wait 24h for your quote.
                    In case of AOG, an additional amount will be charged for urgent care.
                </FormSubHeader>
                <FormWrapper>
                        <QuoteFormInput type="text" name="firstname" placeholder="Your first name*"/>
                        <QuoteFormInput type="text" name="company" placeholder="Company*"/>
                        <QuoteFormInput type="text" name="Address" placeholder="Address*"/>
                        <QuoteFormInput type="text" name="Email" placeholder="Email*"/>
                        <QuoteFormInput type="text" name="Telephone" placeholder="Telephone*"/>
                        <QuoteFormInput type="text" name="Prefix" placeholder="Aircraft Prefix*"/>
                        <QuoteFormInput type="text" name="Piece #" placeholder="Piece Number*"/>
                        <QuoteFormInput type="text" name="Amount" placeholder="Amount*"/>
                        <QuoteFormInput type="text" name="Message" placeholder="Message*"/>
                </FormWrapper>
                <FormSubmitBtn>Button</FormSubmitBtn>
            </ColumnWrapper1>
            <ColumnWrapper2>
                <Disclaimer1>
                    With the unforeseen circumstances of COVID-19 we are doing everything to fulfill your requests as quickly as possible.
                </Disclaimer1>
                <Disclaimer2> We area a family owned and operated business. </Disclaimer2>
                <HoursHeader> Hours: </HoursHeader>
                <HoursListed> Mon - Fri: 9:00 am - 5:00 pm MST (Wyoming, USA) 
                              Sat - Sun: Closed</HoursListed>
                <Disclaimer2> As an American company, we observe local times and holidays. </Disclaimer2>
                <HolidaysListed>
                    2020 Holidays :
                    1/1 New Year's Day
                    1/20 MLK Jr. Birthday
                    2/17 President's Day
                    5/25 Memorial Day
                    07/03 Independence Day
                    9/7 Labor Day
                    10/10 Columbus Day
                    11/11 Veterans Day
                    26/11 Thanksgiving + 27/11 Black Friday
                    11/25 Christmas
                </HolidaysListed>
                <ObservationHeader> Observation </ObservationHeader>
                <ObservationParagraph>
                    The tax exemption, on the import of parts, parts and components, will be recognized for goods destined to repair, 
                    overhaul or maintenance of aircraft and boats. 
                    (Wording given by Decree No. 7,044, of 2009). § 1 In order to comply with the provisions of the caput, the importer 
                    must provide proof of ownership or ownership of the 
                    aircraft or vessel. (Included by Decree No. 7,044, of 2009). § 2 In the hypothesis if the import is promoted by an 
                    aircraft repair, overhaul or maintenance workshop, it must: I - present a service contract, indicating the owner or 
                    owner of the aircraft; (Included by Decree No. 7,044, 2009) .II - be approved by the competent body of the Ministry of 
                    Defense. (Included by Decree No. 7,044, 2009).
                </ObservationParagraph>
            </ColumnWrapper2>
        </FormContainer>
    )
}

export default QuoteForm
