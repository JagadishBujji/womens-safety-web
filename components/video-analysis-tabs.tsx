import Toggle from "./toggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const VideoAnalysisTabs = () => {
  return (
    <Tabs defaultValue="summary" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="summary">Summary</TabsTrigger>
        <TabsTrigger value="analyse">Analyse</TabsTrigger>
      </TabsList>

      <TabsContent value="summary">
        <h3>
          <b>Summary</b>
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
          lobortis nulla. Suspendisse ultricies tincidunt malesuada.
          Pellentesque finibus sem elit, eu lobortis justo ultrices et.
        </p>
      </TabsContent>

      <TabsContent value="analyse">
        <Toggle />
      </TabsContent>
    </Tabs>
  );
};

export default VideoAnalysisTabs;
