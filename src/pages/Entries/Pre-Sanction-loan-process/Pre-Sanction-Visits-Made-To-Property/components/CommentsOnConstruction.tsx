import { useState, useContext } from "preact/hooks";
import { OptionContext } from "../../../../../State-Management/optionContext/context";
import PageBody from "../../../../../shared/components/PageBody/PageBody";
import TextAreaComp from "../../../../../shared/components/TextAreaComp/TextAreaComp";

class commentsOnConstructionModel {
  comments: string = '';
}

export const CommentsOnConstruction = () => {
  const [formData, setFormData] = useState<commentsOnConstructionModel>(
    new commentsOnConstructionModel()
  );
  const dummyoptionArray = [{ value: '' }, { value: 'o1' }];
  const { option } = useContext(OptionContext);
  // function to store input field values in a common form state
  const formValuesController = (inputVal: string, name: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: inputVal,
    }));
  };

  //   function fired on form submit
  const onSubmitHandler = (e) => {
    e.preventDefault();
    alert('submitetd');
  };
  return (
    <>
      <PageBody heading={'Comments on Construction'}>
        <form action="" onSubmit={onSubmitHandler}>
          <TextAreaComp
            formValuesController={formValuesController}
            name="comments"
            value={formData.comments}
            label="Comments on Construction"
            class='cs4'
          />
        </form>
      </PageBody>
    </>
  )
}
