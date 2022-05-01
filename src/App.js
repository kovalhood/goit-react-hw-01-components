import Section from "components/Section";
import Container from "components/Container";
import SectionTitle from "components/SectionTitle";
import Profile from "components/Profile";
import Friends from "components/Friends";
import StatisticsTable from "components/Statistics";
import Transactions from "components/Transactions";

export const App = ({ data }) => {
    return (
        <div>
            <Section>
                <Container><Profile {...data.user} /></Container>
            </Section>
            
            <Section>
                <Container><Friends items={data.friends} /></Container>
            </Section>

            <Section>
                <Container>
                    <SectionTitle title={"Upload stats"}/>
                    <StatisticsTable items={data.statistics} />
                </Container>
            </Section>

            <Section>
                <Container><Transactions items={data.transactions} /></Container>
            </Section>
        </div>
    );
}