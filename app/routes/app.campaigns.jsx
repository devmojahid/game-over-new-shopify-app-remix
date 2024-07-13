import {
  Button,
  Card,
  InlineGrid,
  Layout,
  LegacyCard,
  Page,
  Tabs,
  Text,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { useCallback, useState } from "react";
import { tabs } from "../utils/tabs"; 

const CampaignsPage = ()=> {

  const [selected, setSelected] = useState(0);

  const handaleTabChange = useCallback((selectedIndex)=> setSelected(selectedIndex), []);



  return (
    <Page>
      <TitleBar title="campaigns page" />
      <Layout>

        <Layout.Section>
          <InlineGrid columns={2}>
            <Text variant="heading3xl" as='h2'>Campaigns</Text>
            <Button primary>Create Campaign</Button>
          </InlineGrid>
        </Layout.Section>

        <Layout.Section>
          <LegacyCard>
            <Tabs tabs={tabs} selected={selected} onSelect={handaleTabChange}>
                <LegacyCard.Section title={tabs[selected].content}>
                  {tabs[selected].component}
                </LegacyCard.Section>
            </Tabs>
          </LegacyCard>
        </Layout.Section>

      </Layout>
    </Page>
  );
}

export default CampaignsPage;
