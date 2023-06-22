import pandas as pd
import numpy as np
from flask import Flask
from flask import request
from scipy import spatial
app = Flask(__name__)


#clf = pickle.load(open('churn_model.pkl', 'rb'))

def data_science_block(books, culture):
    """
    Data Science block
    books: list of book's id of user
    culture: culture for recommendation. e.g. French Literature
    """
    df_full = pd.read_csv('books_1.Best_Books_Ever.csv')
    df = pd.read_pickle('last_data_hopefully.pkl')

    cols = list(df[df[culture] == 1].bookId)
    df_rows = df[df['bookId'].isin(books)][['bookId', 'array']]
    df_columns = df[df['bookId'].isin(cols)][['bookId', 'array']]

    def similarity_score(t1, t2):
         return 1 - spatial.distance.cosine(t1, t2)

    def get_similarity(df_rows, df_columns):
        output = np.empty(shape=(df_rows.shape[0], df_columns.shape[0]))
        for i_r, r in enumerate(df_rows['array']):
            for i_c, c in enumerate(df_columns['array']):
                output[i_r, i_c] = similarity_score(r, c)
        return pd.DataFrame(data=output, index=df_rows.bookId, columns=df_columns.bookId)

    def get_recommendations(df):
        books_recommendations = []
        for i in range(df.shape[0]):
            books_recommendations.append(df.columns[df.iloc[i].argmax(axis=0)])
        return books_recommendations

    def get_info(book_reco, df):
        book_data = df[df.bookId.isin(book_reco)]
        return book_data

    df_scores = get_similarity(df_rows, df_columns)

    get_recommendations(df_scores)

    answer = get_info(get_recommendations(df_scores), df_full)
    # answer is DataFrame
    answer = answer[['bookId', 'title', 'author', 'coverImg', 'description']]
    answer_lst_of_dict = answer.to_dict('records')
    return answer_lst_of_dict


#@app.route('/predict_churn')
@app.route('/predict_churn', methods=['GET', 'POST'])
def predict_model():
    # a = request.args.get('id_lst')
    # b = request.args.get('culture')
    body = request.json
    #print(body)
    id_lst = body["key1"]
    culture = body["key2"]

    book_recommendation = data_science_block(id_lst, culture)

    #return {"id1": id_lst[0], "culture": culture}
    return book_recommendation


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
