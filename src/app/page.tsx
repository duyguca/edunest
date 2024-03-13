import FiftyFifty from "@/components/FiftyFifty";
import Hero from "@/components/Hero";
import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";

const componentMaps = {
  HeroComponent: Hero,
  FiftyFiftyComponent: FiftyFifty,
};

const query = gql`
  query PageQuery {
    page: pageCollection(where: { slug: "home" }) {
      items {
        title
        componentsCollection(limit: 9) {
          items {
            ... on HeroComponent {
              __typename
              title
              subtitle
              desc
              imgPath {
                url
              }
            }
            ... on FiftyFiftyComponent {
              __typename
              title
              variant
              desc
              imgPath {
                url
              }
            }
            ... on CoursesComponent {
              __typename
              title
              cources: coursesCollection(limit: 10) {
                items {
                  title
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default async function Home() {
  const { data } = await getClient().query({ query });

  const components = data.page.items[0].components?.items;

  // console.log({ components });

  // console.log(componentMaps[components[0].__typename]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      {components.map((component: any, index: number) => {
        const componentTypeName = component.__typename;

        if (componentTypeName && componentTypeName in componentMaps) {
          const Component = componentMaps[componentTypeName];

          if (Component) {
            return <Component {...component} />;
          }
        }
      })}
    </main>
  );
}
